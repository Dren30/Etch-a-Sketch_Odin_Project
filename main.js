let header = document.createElement("h1");
header.textContent = "Etch-A-Sketch"

let body = document.querySelector("body");
body.appendChild(header);

let changeGridButton = document.createElement("button");
changeGridButton.textContent = "Change Grid";
changeGridButton.classList.add("btn");
changeGridButton.classList.add("grid-btn");
changeGridButton.addEventListener("click", () => {
    changeGrid();
})
body.appendChild(changeGridButton);

const GRIDSIDE = 900;
let squaresPerSide = 16;

let sketchArea = document.createElement("div");
sketchArea.classList.add("sketch-Area");
sketchArea.style.width = `${GRIDSIDE}px`;
sketchArea.style.height = `${GRIDSIDE}px`;

body.appendChild(sketchArea);

let buttonsArea = document.createElement("div");
buttonsArea.classList.add("btns-Area");

let paintBlackButton = document.createElement("button");
paintBlackButton.textContent = "Paint Black"
paintBlackButton.classList.add("btn");


let paintRedButton = document.createElement("button");
paintRedButton.textContent = "Paint Red"
paintRedButton.classList.add("btn");


let randomColorButton = document.createElement("button");
randomColorButton.textContent = "Random Colors"
randomColorButton.classList.add("btn");


buttonsArea.appendChild(paintBlackButton);
buttonsArea.appendChild(paintRedButton);
buttonsArea.appendChild(randomColorButton);


body.appendChild(buttonsArea);

createSketchCells();


function createSketchCells() {
    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
        
        let cell = document.createElement("div");
        cell.style.width = `${(GRIDSIDE/squaresPerSide)}px`;
        cell.style.height = `${(GRIDSIDE/squaresPerSide)}px`;
        cell.classList.add("cell");

        sketchArea.appendChild(cell);
        
    }
}

function changeGrid() {
    let newAmountOfSquares = Number(prompt("How many cells per side? (Use a round number between 2-100)"));

    if (typeof newAmountOfSquares === "number") {
            
        if ((newAmountOfSquares >= 2 && newAmountOfSquares <= 100) && (newAmountOfSquares % 1 == 0)) {
    
            sketchArea.textContent="";
            squaresPerSide = newAmountOfSquares;
            notNumber = false;
            createSketchCells();
        }else{
            alert("Choose a round number between 2-100")
        }
            
    }else{
        alert("Use a number");        
    }
}

