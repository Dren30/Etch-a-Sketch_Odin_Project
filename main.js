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
