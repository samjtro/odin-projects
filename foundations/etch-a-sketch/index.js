const grid = document.querySelector("#grid");
const button = document.querySelector("#ctrl-button");

button.addEventListener("click", () => {
    const size = prompt("grid size");
    newGrid(size);
})

function newGrid(num) {
    grid.innerHTML = "";

    for (let i=1; i<=num; i++) {
        createLine(num);
    }
}

function createLine(num) {
    const line = document.createElement("div");
    line.classList.add("line");

    for (let i=1; i<=num; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background-color: black;")
        });
        line.appendChild(square);
    }
    
    grid.appendChild(line);
}

for (let i=1; i<=16; i++) {
    createLine(16);
}