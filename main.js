let header = document.createElement("h1");
header.textContent = "Etch-A-Sketch"

let body = document.querySelector("body");
body.appendChild(header);

let changeGridButton = document.createElement("button");
changeGridButton.textContent = "Change Grid";
changeGridButton.classList.add("btn");
changeGridButton.classList.add("grid-btn");
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