import torch
import torch.nn as nn
import onnxruntime as ort
import numpy as np


class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()

        self.fc = nn.Sequential(
            nn.Flatten(),
            nn.Linear(28 * 28, 128),
            nn.ReLU(),
            nn.Linear(128, 10)
        )

    def forward(self, x):
        return self.fc(x)


# -------------------------
# PyTorch
# -------------------------

model = Net()

model.load_state_dict(
    torch.load(
        "./mnist_cnn.pth",
        map_location="cpu"
    )
)

model.eval()

# Random test image
x = torch.randn(1, 1, 28, 28)

with torch.no_grad():

    pytorch_output = model(x)

print("PyTorch:")
print(pytorch_output.numpy())


# -------------------------
# ONNX
# -------------------------

session = ort.InferenceSession(
    "./mnist_cnn.onnx"
)

onnx_output = session.run(
    ["output"],
    {"input": x.numpy()}
)[0]

print("\nONNX:")
print(onnx_output)

print("\nMax difference:")
print(
    np.max(
        np.abs(
            pytorch_output.numpy() -
            onnx_output
        )
    )
)