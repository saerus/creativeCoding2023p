let lastMouse;
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
    gridX = width / gridXQtt;
    gridY = height / gridYQtt;
    //
    lastMouse = createVector(mouseX, mouseY);
}
// P5JS draw
function draw() {
    if(mouseIsPressed) {
        let pos = createVector(mouseX, mouseY);
        let dir = pos.copy().sub(lastMouse);
        if(dir.mag()>50) {
            drawArrow(lastMouse, dir);
            lastMouse = createVector(mouseX, mouseY);
        }
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}