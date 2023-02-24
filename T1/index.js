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
    //
    rectMode(CENTER);
    background(255, 0, 0);
    let rx = random(0, width);
    let ry = random(0, height);
    //
    line(0, 0, rx, ry);
    translate(rx, ry);
    rotate(PI/4);
    rect(0, 0, 100, 100);
}
// P5JS draw
function draw() {
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}