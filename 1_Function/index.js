// P5JS preload
function preload() {
}
// user input
function mousePressed() {
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    background(255);
    rectMode(CENTER);
    //
}
// P5JS draw
function draw() {
    if(mouseIsPressed ) {
        let pos = createVector(random(0, width), random(0, height));
        drawSquare(pos);
        drawDebugLine(pos);
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function drawDebugLine(pos) {
    line(0, 0, pos.x, pos.y);
}
function drawSquare(pos) {
    push();
    translate(pos.x, pos.y);
    rotate(random(0, TAU));
    rect(0, 0,  100, 100);
    rect(-25, -25,  10, 10);
    rect(25, -25,  10, 10);
    pop();
}