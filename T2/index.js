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
    imageMode(CENTER);
    //
}
// P5JS draw
function draw() {
    if (mouseIsPressed) {
        let a = getRandomPoint();
        let b = getRandomPoint();
        // b.y+=rowHeight;
        drawFromTo(a, b);
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// Draw arrow from A to B
function drawFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(1 / dir.mag());
    // ICI
    line(0, 0, 1, 0);
    line(1, 0, 0.99, -0.01);
    line(1, 0, 0.99, 0.01);
    //
    pop();
}
function getRandomPoint() {
    let x = random(0, width);
    let y = random(0, height);
    x = gridifyX(x);
    y = gridifyY(y);
    return createVector(x, y);
}

function gridifyX(n) {
    let gridQttX = 10;
    let columnWidth = width/gridQttX;
    return round(n/columnWidth)*columnWidth;
}
function gridifyY(n) {
    let gridQttY = 5;
    let rowHeight = height/gridQttY;
    return round(n/rowHeight)*rowHeight;
}