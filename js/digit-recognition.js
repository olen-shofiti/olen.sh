console.log("Digit Recognition JS loaded");

let session = null;

async function loadModel() {

    try {

        session =
            await ort.InferenceSession.create(
                "../models/mnist_cnn.onnx"
            );

        console.log("ONNX model loaded");

    } catch (err) {

        console.error(
            "Failed to load model",
            err
        );
    }
}

loadModel();

function argMax(arr) {

    return arr.indexOf(
        Math.max(...arr)
    );
}

async function predictDigit() {

	console.log("Predict button clicked");

    if (!session) {

        alert("Model not loaded yet.");
        return;
    }

const sourceCtx =
    canvas.getContext("2d");

const sourceImage =
    sourceCtx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
    );

let minX = canvas.width;
let minY = canvas.height;

let maxX = 0;
let maxY = 0;

let found = false;

for (let y = 0; y < canvas.height; y++) {

    for (let x = 0; x < canvas.width; x++) {

        const idx =
            (y * canvas.width + x) * 4;

        const pixel =
            sourceImage.data[idx];

        if (pixel < 240) {

            found = true;

            minX = Math.min(minX, x);
            minY = Math.min(minY, y);

            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
        }
    }
}

if (!found) {

    alert("Draw a digit first.");
    return;
}

const cropWidth =
    maxX - minX + 1;

const cropHeight =
    maxY - minY + 1;

const cropCanvas =
    document.createElement("canvas");

cropCanvas.width = cropWidth;
cropCanvas.height = cropHeight;

const cropCtx =
    cropCanvas.getContext("2d");

cropCtx.drawImage(
    canvas,

    minX,
    minY,
    cropWidth,
    cropHeight,

    0,
    0,
    cropWidth,
    cropHeight
);

const tmpCanvas =
    document.createElement("canvas");

tmpCanvas.width = 28;
tmpCanvas.height = 28;

const tmpCtx =
    tmpCanvas.getContext("2d");

tmpCtx.fillStyle = "black";

tmpCtx.fillRect(
    0,
    0,
    28,
    28
);

tmpCtx.drawImage(
    cropCanvas,

    0,
    0,
    cropWidth,
    cropHeight,

    4,
    4,
    20,
    20
);

const imageData =
    tmpCtx.getImageData(
        0,
        0,
        28,
        28
    );

	document.body.appendChild(tmpCanvas);

    const inputData =
        new Float32Array(
            28 * 28
        );

    for (let i = 0; i < 28 * 28; i++) {

        const pixel =
            imageData.data[i * 4];

        let value =
		    (255 - pixel) / 255.0;

		/* Normalize exactly like PyTorch */
		value =
    		(value - 0.1307) / 0.3081;

		inputData[i] = value;

    }

	console.log("Creating tensor");
    const tensor =
        new ort.Tensor(
            "float32",
            inputData,
            [1, 1, 28, 28]
        );

    const results =
        await session.run({
            input: tensor
        });

	console.log("Inference finished");
    const output =
        results.output.data;

    const prediction =
        argMax(
            Array.from(output)
        );

	console.log(
	    "Output:",
	    Array.from(output)
	);

    document
        .getElementById(
            "predictDisplay"
        )
        .innerText =
        prediction;
}

const canvas = document.getElementById("canvas");

canvas.addEventListener(
    "touchmove",
    function(e) {
        e.preventDefault();
    },
    { passive: false }
);

canvas.addEventListener(
    "touchstart",
    function(e) {
        e.preventDefault();
    },
    { passive: false }
);

canvas.addEventListener(
    "touchend",
    function(e) {
        e.preventDefault();
    },
    { passive: false }
);

console.log("Canvas =", canvas);

console.log("Before if(canvas)");

if (canvas) {

	console.log("Inside if(canvas)");

    const ctx = canvas.getContext("2d");

    let drawing = false;

    canvas.addEventListener("pointerdown", (e) => {

    	e.preventDefault();

    	canvas.setPointerCapture(e.pointerId);
    	
        drawing = true;

        const rect = canvas.getBoundingClientRect();

        ctx.beginPath();

        ctx.moveTo(
            e.clientX - rect.left,
            e.clientY - rect.top
        );
    });

    canvas.addEventListener("pointermove", (e) => {

    	e.preventDefault();

        if (!drawing) return;

        const rect = canvas.getBoundingClientRect();

        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";

        ctx.lineTo(
            e.clientX - rect.left,
            e.clientY - rect.top
        );

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(
            e.clientX - rect.left,
            e.clientY - rect.top
        );
    });

    canvas.addEventListener("pointerup", () => {

    	e.preventDefault();
        drawing = false;
        ctx.beginPath();
    });

    document
        .getElementById("clearBtn")
        .addEventListener("click", () => {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            document.getElementById(
                "predictDisplay"
            ).innerText = "?";
        });

    document
    	.getElementById("predictBtn")
    	.addEventListener("click", predictDigit
    );
}
