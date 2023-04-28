let papayes = [];
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    background(247, 246, 243);
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1); // change to 2 !
    smooth();
    calculateGrid();
    //
    background(247, 246, 243);
    rectMode(CORNERS);
}
// P5JS draw
function draw() {
    background(255);
    for(let i=0; i<papayes.length; i++) {
        papayes[i].animate();
        papayes[i].display();
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function mousePressed() {
    let a = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let p = new Papaye(a);
    papayes.push(p);
}
function keyPressed() {
    if (key == "s") {
        background(255);
    }
}