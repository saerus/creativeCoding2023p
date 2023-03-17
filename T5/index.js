let ocrImg;
// P5JS preload
function preload() {
    ocrImg = loadImage("assets/fullHD.png");
}
// user input
function mousePressed() {
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1); // change to 2 !
    smooth();
    calculateGrid();
    //
    background(255);
    rectMode(CORNERS);
}
// P5JS draw
function draw() {
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(255);
    }
}