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
        let dir = p5.Vector.random2D();
        drawDebugLine(pos, dir);
        drawArrow(pos, dir);
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function drawDebugLine(pos, dir) {
    line(pos.x, pos.y, pos.x+dir.x, pos.y+dir.y);
}
function drawArrow(pos, dir) {
    push();
    translate(pos.x, pos.y);
    rotate(dir.heading());
    //
    line(0, 0, 100, 0);
    line(100, 0, 90, -10);
    line(100, 0, 90, +10);
    //
    pop();
}