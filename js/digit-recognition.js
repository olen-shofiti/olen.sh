const canvas = document.getElementById("canvas");
const digitCursor = document.getElementById("digit-cursor");
const clearButton = document.getElementById("clearBtn");
const predictButton = document.getElementById("predictBtn");
const predictionDisplay = document.getElementById("predictDisplay");
const statusDisplay = document.getElementById("demoStatus");

let sessionPromise = null;
let runtimePromise = null;
let isPredicting = false;

function setStatus(message, state = "") {
    if (!statusDisplay) return;

    statusDisplay.textContent = window.siteTranslate ? window.siteTranslate(message) : message;
    statusDisplay.dataset.state = state;
}

function loadRuntime() {
    if (window.ort) return Promise.resolve(window.ort);
    if (runtimePromise) return runtimePromise;

    runtimePromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        const timeoutId = window.setTimeout(() => {
            script.remove();
            reject(new Error("Timed out downloading ONNX Runtime."));
        }, 20000);

        script.src = new URL("../vendor/onnxruntime-web/ort.min.js", document.baseURI).href;
        script.async = true;
        script.onload = () => {
            window.clearTimeout(timeoutId);
            if (window.ort) {
                resolve(window.ort);
            } else {
                reject(new Error("ONNX Runtime loaded without its browser API."));
            }
        };
        script.onerror = () => {
            window.clearTimeout(timeoutId);
            reject(new Error("Could not download ONNX Runtime."));
        };
        document.head.appendChild(script);
    }).catch((error) => {
        runtimePromise = null;
        throw error;
    });

    return runtimePromise;
}

function loadModel() {
    if (sessionPromise) return sessionPromise;

    sessionPromise = loadRuntime()
        .then((ort) => {
            // Keep the runtime and its WASM binary on the same origin and release.
            ort.env.wasm.wasmPaths = new URL("../vendor/onnxruntime-web/", document.baseURI).href;
            // Single-threaded WASM works without cross-origin isolation headers.
            ort.env.wasm.numThreads = 1;
            return ort.InferenceSession.create("../model/mnist_cnn.onnx");
        })
        .catch((error) => {
            sessionPromise = null;
            throw error;
        });

    return sessionPromise;
}

function argMax(values) {
    let bestIndex = -1;
    let bestValue = -Infinity;

    for (let i = 0; i < values.length; i++) {
        if (Number.isFinite(values[i]) && values[i] > bestValue) {
            bestValue = values[i];
            bestIndex = i;
        }
    }

    return bestIndex;
}

function makeModelInput(sourceCanvas, sourceContext) {
    const { width, height } = sourceCanvas;
    const sourceImage = sourceContext.getImageData(0, 0, width, height);

    let minX = width;
    let minY = height;
    let maxX = -1;
    let maxY = -1;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const pixelIndex = (y * width + x) * 4;
            if (sourceImage.data[pixelIndex] > 10) {
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }
    }

    if (maxX < minX || maxY < minY) return null;

    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;
    const inputCanvas = document.createElement("canvas");
    inputCanvas.width = 28;
    inputCanvas.height = 28;

    const inputContext = inputCanvas.getContext("2d", { willReadFrequently: true });
    if (!inputContext) throw new Error("Could not prepare the drawing for prediction.");

    inputContext.fillStyle = "black";
    inputContext.fillRect(0, 0, 28, 28);

    const scale = 20 / Math.max(cropWidth, cropHeight);
    const drawWidth = cropWidth * scale;
    const drawHeight = cropHeight * scale;

    inputContext.imageSmoothingEnabled = true;
    inputContext.drawImage(
        sourceCanvas,
        minX,
        minY,
        cropWidth,
        cropHeight,
        (28 - drawWidth) / 2,
        (28 - drawHeight) / 2,
        drawWidth,
        drawHeight
    );

    const pixels = inputContext.getImageData(0, 0, 28, 28).data;
    const input = new Float32Array(28 * 28);

    for (let i = 0; i < input.length; i++) {
        input[i] = ((pixels[i * 4] / 255) - 0.1307) / 0.3081;
    }

    return input;
}

async function predictDigit() {
    if (!canvas || !predictionDisplay || isPredicting) return;

    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) {
        setStatus("Drawing is unavailable in this browser.", "error");
        return;
    }

    let input;
    try {
        input = makeModelInput(canvas, context);
    } catch (error) {
        console.error("Could not prepare the drawing", error);
        setStatus("Could not read the drawing. Try refreshing the page.", "error");
        return;
    }

    if (!input) {
        predictionDisplay.textContent = "";
        setStatus("Draw a digit on the canvas first.", "error");
        return;
    }

    isPredicting = true;
    if (predictButton) predictButton.disabled = true;
    if (clearButton) clearButton.disabled = true;
    setStatus("Loading the digit model…", "loading");

    try {
        const [ort, session] = await Promise.all([loadRuntime(), loadModel()]);
        const inputName = session.inputNames[0];
        const outputName = session.outputNames[0];

        if (!inputName || !outputName) {
            throw new Error("The digit model has an unexpected input or output format.");
        }

        setStatus("Recognizing your digit…", "loading");
        const results = await session.run({
            [inputName]: new ort.Tensor("float32", input, [1, 1, 28, 28])
        });

        const output = results[outputName]?.data;
        if (!output || output.length !== 10) {
            throw new Error("The digit model returned an unexpected result.");
        }

        const prediction = argMax(output);
        if (prediction < 0) throw new Error("The digit model returned no valid prediction.");

        predictionDisplay.textContent = String(prediction);
        setStatus("Prediction ready.", "success");
    } catch (error) {
        console.error("Digit prediction failed", error);
        predictionDisplay.textContent = "";
        setStatus(
            "Could not load or run the digit model. Check that the site files are available, then try again.",
            "error"
        );
    } finally {
        isPredicting = false;
        if (predictButton) predictButton.disabled = false;
        if (clearButton) clearButton.disabled = false;
    }
}

if (!canvas || !clearButton || !predictButton || !predictionDisplay) {
    setStatus("The digit demo could not start because part of the page is missing.", "error");
} else {
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!context) {
        setStatus("Drawing is unavailable in this browser.", "error");
        clearButton.disabled = true;
        predictButton.disabled = true;
    } else {
        let drawing = false;

        function getCanvasPoint(event) {
            const rect = canvas.getBoundingClientRect();
            return {
                x: (event.clientX - rect.left) * (canvas.width / rect.width),
                y: (event.clientY - rect.top) * (canvas.height / rect.height)
            };
        }

        function stopDrawing(event) {
            drawing = false;
            context.beginPath();

            if (event && canvas.hasPointerCapture(event.pointerId)) {
                canvas.releasePointerCapture(event.pointerId);
            }
        }

        let keyboardPoint = { x: canvas.width / 2, y: canvas.height / 2 };
        let keyboardPainting = false;

        function positionKeyboardCursor() {
            if (!digitCursor) return;
            digitCursor.style.left = `${(keyboardPoint.x / canvas.width) * 100}%`;
            digitCursor.style.top = `${(keyboardPoint.y / canvas.height) * 100}%`;
        }

        function drawKeyboardStroke(from, to) {
            context.beginPath();
            context.lineWidth = 15;
            context.lineCap = "round";
            context.strokeStyle = "white";
            context.moveTo(from.x, from.y);
            context.lineTo(to.x, to.y);
            context.stroke();
        }

        canvas.addEventListener("keydown", event => {
            const movement = {
                ArrowLeft: [-10, 0],
                ArrowRight: [10, 0],
                ArrowUp: [0, -10],
                ArrowDown: [0, 10]
            }[event.key];

            if (event.code === "Space") {
                event.preventDefault();
                if (!isPredicting && !keyboardPainting) {
                    keyboardPainting = true;
                    context.beginPath();
                    context.fillStyle = "white";
                    context.arc(keyboardPoint.x, keyboardPoint.y, 7.5, 0, Math.PI * 2);
                    context.fill();
                }
                return;
            }

            if (!movement) return;
            event.preventDefault();
            if (isPredicting) return;

            const previousPoint = keyboardPoint;
            keyboardPoint = {
                x: Math.max(0, Math.min(canvas.width, keyboardPoint.x + movement[0])),
                y: Math.max(0, Math.min(canvas.height, keyboardPoint.y + movement[1]))
            };
            if (keyboardPainting) drawKeyboardStroke(previousPoint, keyboardPoint);
            if (digitCursor) {
                digitCursor.parentElement.classList.add("keyboard-mode");
                positionKeyboardCursor();
            }
        });

        canvas.addEventListener("keyup", event => {
            if (event.code === "Space") keyboardPainting = false;
        });

        window.addEventListener("blur", () => {
            keyboardPainting = false;
        });

        canvas.addEventListener("pointerdown", (event) => {
            event.preventDefault();
            if (isPredicting) return;

            keyboardPainting = false;
            if (digitCursor) digitCursor.parentElement.classList.remove("keyboard-mode");
            canvas.setPointerCapture(event.pointerId);
            drawing = true;

            const point = getCanvasPoint(event);
            context.beginPath();
            context.fillStyle = "white";
            context.arc(point.x, point.y, 7.5, 0, Math.PI * 2);
            context.fill();
            context.beginPath();
            context.moveTo(point.x, point.y);
        });

        canvas.addEventListener("pointermove", (event) => {
            if (!drawing) return;
            event.preventDefault();

            const point = getCanvasPoint(event);
            context.lineWidth = 15;
            context.lineCap = "round";
            context.strokeStyle = "white";
            context.lineTo(point.x, point.y);
            context.stroke();
            context.beginPath();
            context.moveTo(point.x, point.y);
        });

        canvas.addEventListener("pointerup", stopDrawing);
        canvas.addEventListener("pointercancel", stopDrawing);
        canvas.addEventListener("lostpointercapture", () => {
            drawing = false;
            context.beginPath();
        });

        clearButton.addEventListener("click", () => {
            if (isPredicting) return;
            context.clearRect(0, 0, canvas.width, canvas.height);
            predictionDisplay.textContent = "";
            setStatus("Canvas cleared. Draw a digit from 0 to 9.");
        });

        predictButton.addEventListener("click", predictDigit);
        // Begin fetching and initializing the model now, so prediction is ready
        // as soon as the visitor has drawn a digit.
        loadModel().catch(error => console.error("Digit model preload failed", error));
    }
}
