// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let x = gridifyX(mouseX);
    let y = gridifyY(mouseY);
    let a = createVector(x, y);
    let b = getPointAround(x, y, 3);
    drawArrowFromTo(a, b);
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    calculateGrid();
    //
    background(255);
    rectMode(CENTER);
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