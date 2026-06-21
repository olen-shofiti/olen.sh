let session = null;

async function loadModel() {

    try {

        session =
            await ort.InferenceSession.create(
                "../model/mnist_cnn.onnx"
            );

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

            if (pixel > 10) {

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

    const targetSize = 20;
    const scale =
        targetSize /
        Math.max(cropWidth, cropHeight);

    const drawWidth =
        cropWidth * scale;

    const drawHeight =
        cropHeight * scale;

    const drawX =
        (28 - drawWidth) / 2;

    const drawY =
        (28 - drawHeight) / 2;

    tmpCtx.imageSmoothingEnabled = true;

    tmpCtx.drawImage(
        canvas,

        minX,
        minY,
        cropWidth,
        cropHeight,

        drawX,
        drawY,
        drawWidth,
        drawHeight
    );

    const imageData =
        tmpCtx.getImageData(
            0,
            0,
            28,
            28
        );

    const inputData =
        new Float32Array(
            28 * 28
        );

    for (let i = 0; i < 28 * 28; i++) {

        const pixel =
            imageData.data[i * 4];

        let value =
            pixel / 255.0;

        /* Normalize exactly like PyTorch */
        value =
            (value - 0.1307) / 0.3081;

        inputData[i] = value;

    }
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

    const output =
        results.output.data;

    const prediction =
        argMax(
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
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

canvas.addEventListener(
    "touchstart",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

canvas.addEventListener(
    "touchend",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

if (canvas) {

    const ctx = canvas.getContext("2d");

    let drawing = false;

    function stopDrawing(e) {

        if (e) {
            e.preventDefault();

            if (
                e.pointerId !== undefined &&
                canvas.hasPointerCapture(e.pointerId)
            ) {
                canvas.releasePointerCapture(e.pointerId);
            }
        }

        drawing = false;
        ctx.beginPath();
    }

    function getCanvasPoint(e) {

        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    }

    canvas.addEventListener("pointerdown", (e) => {

        e.preventDefault();

        canvas.setPointerCapture(e.pointerId);

        drawing = true;

        const point = getCanvasPoint(e);

        ctx.beginPath();

        ctx.moveTo(
            point.x,
            point.y
        );
    });

    canvas.addEventListener("pointermove", (e) => {

        e.preventDefault();

        if (!drawing) return;

        const point = getCanvasPoint(e);

        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";

        ctx.lineTo(
            point.x,
            point.y
        );

        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(
            point.x,
            point.y
        );
    });

    canvas.addEventListener("pointerup", stopDrawing);
    canvas.addEventListener("pointercancel", stopDrawing);
    canvas.addEventListener("lostpointercapture", stopDrawing);

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
            ).innerText = "";
        });

    document
        .getElementById("predictBtn")
        .addEventListener("click", predictDigit
        );
}
