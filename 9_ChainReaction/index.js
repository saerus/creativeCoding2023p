let gridXQtt = 100;
let gridYQtt = 60;
let gridX, gridY;
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let a = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let b = getPointAround(a);
    drawArrowFromTo(a, b, 10);
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
function gridifyX(n) {
    return round(n/gridX)*gridX;
}
function gridifyY(n) {
    return round(n/gridY)*gridY;
}
function getPointAround(p, distance=1) {
    let rX = gridifyX(p.x+round(random(-1, 1))*gridX*distance);
    let rY = gridifyY(p.y+round(random(-1, 1))*gridY*distance);
    return createVector(rX, rY);
}