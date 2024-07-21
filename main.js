let header = document.createElement("h1");
header.textContent = "Etch-A-Sketch"

let body = document.querySelector("body");
body.appendChild(header);

let changeGridButton = document.createElement("button");
changeGridButton.textContent = "Change Grid";
changeGridButton.classList.add("btn");
changeGridButton.classList.add("grid-btn");
body.appendChild(changeGridButton);
