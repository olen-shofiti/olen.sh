(() => {
    const canvas = document.getElementById("path-grid");
    const algorithmSelect = document.getElementById("algorithm-select");
    const heuristicSelect = document.getElementById("heuristic-select");
    const findButton = document.getElementById("find-path");
    const randomizeButton = document.getElementById("randomize-grid");
    const clearWallsButton = document.getElementById("clear-walls");
    const speedSelect = document.getElementById("speed-select");
    const speedValue = document.getElementById("speed-value");
    const exploredCount = document.getElementById("explored-count");
    const pathLength = document.getElementById("path-length");
    const status = document.getElementById("path-status");

    if (!canvas || !algorithmSelect || !heuristicSelect || !findButton ||
        !randomizeButton || !clearWallsButton || !speedSelect || !status) {
        return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
        status.textContent = "The grid could not start because canvas drawing is unavailable.";
        return;
    }

    const columns = 30;
    const rows = 30;
    const cellSize = canvas.width / columns;
    const cellCount = columns * rows;
    const walls = new Set();
    const exploredCells = new Set();
    const routeCells = new Set();

    let start = 15 * columns + 4;
    let goal = 15 * columns + 25;
    let cursorCell = start;
    let pointerDown = false;
    let activeTool = "wall";
    let lastPointerCell = -1;
    let animationFrame = null;
    let animationSteps = [];
    let animationPosition = 0;
    let activeSearch = null;

    class MinHeap {
        constructor() {
            this.values = [];
        }

        get size() {
            return this.values.length;
        }

        push(value) {
            this.values.push(value);
            let index = this.values.length - 1;

            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.values[parentIndex].priority <= value.priority) break;
                this.values[index] = this.values[parentIndex];
                index = parentIndex;
            }

            this.values[index] = value;
        }

        pop() {
            if (this.values.length === 0) return null;

            const first = this.values[0];
            const last = this.values.pop();
            if (this.values.length > 0) {
                let index = 0;

                while (true) {
                    const leftIndex = index * 2 + 1;
                    const rightIndex = leftIndex + 1;
                    if (leftIndex >= this.values.length) break;

                    let smallerIndex = leftIndex;
                    if (rightIndex < this.values.length &&
                        this.values[rightIndex].priority < this.values[leftIndex].priority) {
                        smallerIndex = rightIndex;
                    }

                    if (this.values[smallerIndex].priority >= last.priority) break;
                    this.values[index] = this.values[smallerIndex];
                    index = smallerIndex;
                }

                this.values[index] = last;
            }

            return first;
        }
    }

    function cellCoordinates(index) {
        return { x: index % columns, y: Math.floor(index / columns) };
    }

    function neighbors(index) {
        const { x, y } = cellCoordinates(index);
        const result = [];
        if (x > 0) result.push(index - 1);
        if (x < columns - 1) result.push(index + 1);
        if (y > 0) result.push(index - columns);
        if (y < rows - 1) result.push(index + columns);
        return result;
    }

    function heuristic(from, to) {
        const a = cellCoordinates(from);
        const b = cellCoordinates(to);
        const dx = Math.abs(a.x - b.x);
        const dy = Math.abs(a.y - b.y);

        return heuristicSelect.value === "euclidean" ? Math.hypot(dx, dy) : dx + dy;
    }

    function paintCell(index, color) {
        const x = (index % columns) * cellSize;
        const y = Math.floor(index / columns) * cellSize;
        context.fillStyle = color;
        context.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
    }

    function drawGrid() {
        context.fillStyle = "#10151f";
        context.fillRect(0, 0, canvas.width, canvas.height);

        for (let index = 0; index < cellCount; index++) {
            let color = "#222a37";
            if (exploredCells.has(index)) color = "#687bb5";
            if (routeCells.has(index)) color = "#ffd166";
            if (walls.has(index)) color = "#3a4352";
            if (index === start) color = "#40c987";
            if (index === goal) color = "#ff6c72";
            paintCell(index, color);
        }

        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "700 15px DM Sans, sans-serif";
        context.fillStyle = "#0b1118";
        const startPosition = cellCoordinates(start);
        const goalPosition = cellCoordinates(goal);
        context.fillText("S", (startPosition.x + 0.5) * cellSize, (startPosition.y + 0.5) * cellSize);
        context.fillStyle = "#fff";
        context.fillText("G", (goalPosition.x + 0.5) * cellSize, (goalPosition.y + 0.5) * cellSize);

        if (document.activeElement === canvas) {
            const focusPosition = cellCoordinates(cursorCell);
            context.strokeStyle = "#d4beff";
            context.lineWidth = 3;
            context.strokeRect(
                focusPosition.x * cellSize + 3,
                focusPosition.y * cellSize + 3,
                cellSize - 6,
                cellSize - 6
            );
        }
    }

    function stopAnimation() {
        if (animationFrame !== null) {
            window.cancelAnimationFrame(animationFrame);
        }
        animationFrame = null;
        animationSteps = [];
        animationPosition = 0;
        activeSearch = null;
        findButton.textContent = "Find Path";
    }

    function resetSearch(message = "Board updated. Choose Find Path to run the search.") {
        stopAnimation();
        exploredCells.clear();
        routeCells.clear();
        if (exploredCount) exploredCount.textContent = "—";
        if (pathLength) pathLength.textContent = "—";
        status.textContent = message;
        drawGrid();
    }

    function selectedTool() {
        return document.querySelector('input[name="grid-tool"]:checked')?.value || "wall";
    }

    function applyTool(index, tool) {
        if (index < 0 || index >= cellCount) return false;
        let changed = false;

        if (tool === "wall" && index !== start && index !== goal && !walls.has(index)) {
            walls.add(index);
            changed = true;
        } else if (tool === "erase" && walls.delete(index)) {
            changed = true;
        } else if (tool === "start" && index !== goal && !walls.has(index) && start !== index) {
            start = index;
            changed = true;
        } else if (tool === "goal" && index !== start && !walls.has(index) && goal !== index) {
            goal = index;
            changed = true;
        }

        if (changed) {
            cursorCell = index;
            drawGrid();
        }

        return changed;
    }

    function indexAtPointer(event) {
        const bounds = canvas.getBoundingClientRect();
        const x = Math.floor(((event.clientX - bounds.left) / bounds.width) * columns);
        const y = Math.floor(((event.clientY - bounds.top) / bounds.height) * rows);
        if (x < 0 || x >= columns || y < 0 || y >= rows) return -1;
        return y * columns + x;
    }

    function randomizeWalls() {
        walls.clear();
        const target = 200;
        while (walls.size < target) {
            const cell = Math.floor(Math.random() * cellCount);
            if (cell !== start && cell !== goal) walls.add(cell);
        }
    }

    function search() {
        const algorithm = algorithmSelect.value;
        const parent = new Int32Array(cellCount);
        parent.fill(-2);
        parent[start] = -1;
        const expanded = [];
        let found = false;

        if (algorithm === "bfs" || algorithm === "dfs") {
            const frontier = [start];
            const discovered = new Uint8Array(cellCount);
            discovered[start] = 1;
            let head = 0;

            while (algorithm === "bfs" ? head < frontier.length : frontier.length > 0) {
                const current = algorithm === "bfs" ? frontier[head++] : frontier.pop();
                expanded.push(current);
                if (current === goal) {
                    found = true;
                    break;
                }

                for (const next of neighbors(current)) {
                    if (walls.has(next) || discovered[next]) continue;
                    discovered[next] = 1;
                    parent[next] = current;
                    frontier.push(next);
                }
            }
        } else {
            const frontier = new MinHeap();
            const costs = new Float64Array(cellCount);
            costs.fill(Infinity);
            costs[start] = 0;
            const closed = new Uint8Array(cellCount);
            let order = 0;
            frontier.push({ index: start, priority: 0, cost: 0, order: order++ });

            while (frontier.size > 0) {
                const entry = frontier.pop();
                const current = entry.index;
                if (closed[current]) continue;
                if (algorithm === "astar" && entry.cost !== costs[current]) continue;
                closed[current] = 1;
                expanded.push(current);

                if (current === goal) {
                    found = true;
                    break;
                }

                for (const next of neighbors(current)) {
                    if (walls.has(next) || closed[next]) continue;
                    const nextCost = costs[current] + 1;

                    if (algorithm === "greedy") {
                        if (parent[next] !== -2) continue;
                        parent[next] = current;
                        costs[next] = nextCost;
                        frontier.push({
                            index: next,
                            priority: heuristic(next, goal),
                            cost: nextCost,
                            order: order++
                        });
                    } else if (nextCost < costs[next]) {
                        costs[next] = nextCost;
                        parent[next] = current;
                        frontier.push({
                            index: next,
                            priority: nextCost + heuristic(next, goal),
                            cost: nextCost,
                            order: order++
                        });
                    }
                }
            }
        }

        const route = [];
        if (found) {
            for (let cell = goal; cell !== start; cell = parent[cell]) {
                if (cell < 0 || parent[cell] === -2) {
                    route.length = 0;
                    found = false;
                    break;
                }
                route.push(cell);
            }
            route.reverse();
        }

        return { algorithm, expanded, route, found };
    }

    function algorithmName(value) {
        return {
            bfs: "Breadth-First Search",
            dfs: "Depth-First Search",
            astar: "A* Search",
            greedy: "Greedy Best-First Search"
        }[value] || "Search";
    }

    function finishSearch() {
        animationFrame = null;
        animationSteps = [];
        animationPosition = 0;
        findButton.textContent = "Find Path";

        if (exploredCount) exploredCount.textContent = String(activeSearch.expanded.length);
        if (pathLength) pathLength.textContent = activeSearch.found ? String(activeSearch.route.length) : "—";

        if (activeSearch.found) {
            status.textContent = `${algorithmName(activeSearch.algorithm)} found a path of ${activeSearch.route.length} steps after exploring ${activeSearch.expanded.length} nodes.`;
        } else {
            status.textContent = `${algorithmName(activeSearch.algorithm)} could not reach the goal after exploring ${activeSearch.expanded.length} nodes.`;
        }

        activeSearch = null;
    }

    function applyAnimationSteps(limit = Infinity) {
        let processed = 0;
        while (animationPosition < animationSteps.length && processed < limit) {
            const step = animationSteps[animationPosition++];
            if (step.type === "explored") exploredCells.add(step.index);
            else routeCells.add(step.index);
            processed++;
        }
        drawGrid();
        if (exploredCount) exploredCount.textContent = String(exploredCells.size);
        if (pathLength) pathLength.textContent = routeCells.size ? String(routeCells.size) : "—";
    }

    function animateSearch() {
        const speed = Number(speedSelect.value);
        applyAnimationSteps(speed);

        if (animationPosition >= animationSteps.length) {
            finishSearch();
            return;
        }

        animationFrame = window.requestAnimationFrame(animateSearch);
    }

    function findPath() {
        if (activeSearch) {
            applyAnimationSteps();
            finishSearch();
            return;
        }

        resetSearch("Searching the grid…");
        activeSearch = search();
        animationSteps = [
            ...activeSearch.expanded.map(index => ({ type: "explored", index })),
            ...activeSearch.route.map(index => ({ type: "route", index }))
        ];
        animationPosition = 0;
        findButton.textContent = "Skip animation";

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            applyAnimationSteps();
            finishSearch();
            return;
        }

        animationFrame = window.requestAnimationFrame(animateSearch);
    }

    function clearWalls() {
        resetSearch("Walls cleared. Add obstacles or run a search.");
        walls.clear();
        drawGrid();
    }

    function getSelectedToolInput() {
        return document.querySelector('input[name="grid-tool"]:checked');
    }

    canvas.addEventListener("pointerdown", event => {
        if (event.button !== 0) return;
        event.preventDefault();
        canvas.focus({ preventScroll: true });
        pointerDown = true;
        activeTool = selectedTool();
        lastPointerCell = -1;
        resetSearch();

        if (canvas.setPointerCapture) canvas.setPointerCapture(event.pointerId);
        const cell = indexAtPointer(event);
        if (cell >= 0) {
            lastPointerCell = cell;
            applyTool(cell, activeTool);
        }
    });

    canvas.addEventListener("pointermove", event => {
        if (!pointerDown) return;
        const cell = indexAtPointer(event);
        if (cell < 0 || cell === lastPointerCell) return;
        lastPointerCell = cell;
        applyTool(cell, activeTool);
    });

    function finishPointer(event) {
        pointerDown = false;
        lastPointerCell = -1;
        if (event && canvas.hasPointerCapture?.(event.pointerId)) {
            canvas.releasePointerCapture(event.pointerId);
        }
    }

    canvas.addEventListener("pointerup", finishPointer);
    canvas.addEventListener("pointercancel", finishPointer);
    canvas.addEventListener("lostpointercapture", () => {
        pointerDown = false;
        lastPointerCell = -1;
    });

    canvas.addEventListener("contextmenu", event => {
        event.preventDefault();
        resetSearch();
        const cell = indexAtPointer(event);
        applyTool(cell, "erase");
    });

    canvas.addEventListener("keydown", event => {
        const position = cellCoordinates(cursorCell);
        let next = cursorCell;

        if (event.key === "ArrowLeft" && position.x > 0) next--;
        else if (event.key === "ArrowRight" && position.x < columns - 1) next++;
        else if (event.key === "ArrowUp" && position.y > 0) next -= columns;
        else if (event.key === "ArrowDown" && position.y < rows - 1) next += columns;
        else if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            resetSearch();
            applyTool(cursorCell, selectedTool());
            return;
        } else {
            return;
        }

        event.preventDefault();
        cursorCell = next;
        drawGrid();
    });

    canvas.addEventListener("focus", drawGrid);
    canvas.addEventListener("blur", drawGrid);

    document.querySelectorAll('input[name="grid-tool"]').forEach(input => {
        input.addEventListener("change", () => resetSearch("Tool changed. Edit the grid, then run a search."));
    });

    speedSelect.addEventListener("input", () => {
        if (speedValue) speedValue.value = speedSelect.value;
    });

    findButton.addEventListener("click", findPath);
    randomizeButton.addEventListener("click", () => {
        resetSearch("Random walls created. Choose Find Path to run the search.");
        randomizeWalls();
        drawGrid();
    });
    clearWallsButton.addEventListener("click", clearWalls);

    randomizeWalls();
    drawGrid();
})();
