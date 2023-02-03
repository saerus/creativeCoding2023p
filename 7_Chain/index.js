// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let pos = createVector(mouseX, mouseY);
    let pMouse = createVector(pmouseX, pmouseY);
    let dir = createVector(0, -200);
    drawArrow(pos, dir, random(10, 20));
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    background(255);
    rectMode(CENTER);
    //
    gridX = width / gridXQtt;
    gridY = height / gridYQtt;
}
// P5JS draw
function draw() {
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}