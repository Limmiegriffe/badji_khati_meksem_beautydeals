document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("papillon-container");
    const wingColorPicker = document.getElementById("wingColor");
    const patternColorPicker = document.getElementById("patternColor");

    const svgNS = "http://www.w3.org/2000/svg";

    let svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 200 200");

    // Création des ailes (formes plus réalistes)
    let leftWing = document.createElementNS(svgNS, "path");
    leftWing.setAttribute("d", "M100,80 C30,10 10,90 40,140 C70,180 90,160 100,130");
    leftWing.setAttribute("fill", "#000000");
    leftWing.setAttribute("stroke", "#333");
    leftWing.setAttribute("stroke-width", "2");
    leftWing.setAttribute("class", "wing");

    let rightWing = document.createElementNS(svgNS, "path");
    rightWing.setAttribute("d", "M100,80 C170,10 190,90 160,140 C130,180 110,160 100,130");
    rightWing.setAttribute("fill", "#000000");
    rightWing.setAttribute("stroke", "#333");
    rightWing.setAttribute("stroke-width", "2");
    rightWing.setAttribute("class", "wing");

    // Motifs internes des ailes
    let leftPattern = document.createElementNS(svgNS, "circle");
    leftPattern.setAttribute("cx", "70");
    leftPattern.setAttribute("cy", "100");
    leftPattern.setAttribute("r", "10");
    leftPattern.setAttribute("fill", "#ffffff");

    let rightPattern = document.createElementNS(svgNS, "circle");
    rightPattern.setAttribute("cx", "130");
    rightPattern.setAttribute("cy", "100");
    rightPattern.setAttribute("r", "10");
    rightPattern.setAttribute("fill", "#ffffff");

    // Corps du papillon
    let body = document.createElementNS(svgNS, "rect");
    body.setAttribute("x", "95");
    body.setAttribute("y", "80");
    body.setAttribute("width", "10");
    body.setAttribute("height", "50");
    body.setAttribute("fill", "#333");

    // Antennes
    let leftAntenna = document.createElementNS(svgNS, "path");
    leftAntenna.setAttribute("d", "M100,80 Q90,60 80,50");
    leftAntenna.setAttribute("stroke", "#333");
    leftAntenna.setAttribute("stroke-width", "2");
    leftAntenna.setAttribute("fill", "none");

    let rightAntenna = document.createElementNS(svgNS, "path");
    rightAntenna.setAttribute("d", "M100,80 Q110,60 120,50");
    rightAntenna.setAttribute("stroke", "#333");
    rightAntenna.setAttribute("stroke-width", "2");
    rightAntenna.setAttribute("fill", "none");

    // Ajout des éléments au SVG
    svg.appendChild(leftWing);
    svg.appendChild(rightWing);
    svg.appendChild(leftPattern);
    svg.appendChild(rightPattern);
    svg.appendChild(body);
    svg.appendChild(leftAntenna);
    svg.appendChild(rightAntenna);
    container.appendChild(svg);

    
});