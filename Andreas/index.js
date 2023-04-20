let movingSquare;
// P5JS preload
function preload() {
}
function mousePressed() {
    movingSquare.setFromXY(gridifyX(mouseX), gridifyY(mouseY));
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1); // change to 2 !
    smooth();
    calculateGrid();
    //
    movingSquare = new AnimatedSquare();
}
// P5JS draw
function draw() {
    //image(ocrImg, 0, 0, width, height);
    movingSquare.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    // console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(247, 246, 243);
    }
}