let gridXQtt = 10;
let gridYQtt = 5;
let gridX, gridY;
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
    for (let y = 0; y < gridYQtt; y++) {
        for (let x = 0; x < gridXQtt; x++) {
            let a = createVector(x*gridX, y*gridY);
            let b = createVector((x+1)*gridX, (y+1)*gridY);
            drawArrowFromTo(a, b);
        }
    }
}
// P5JS draw
function draw() {
    // if (mouseIsPressed) {
    //     let a = getRandomPoint();
    //     let b = getRandomPoint();
    //     drawArrowFromTo(a, b);
    // }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function drawDebugLine(pos, dir) {
    line(pos.x, pos.y, pos.x + dir.x, pos.y + dir.y);
}
function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}
// Draw arrow pos + dir
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
// Draw arrow from A to B
function drawArrowFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(2 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
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
    return round(n / gridX) * gridX;
}
function gridifyY(n) {
    return round(n / gridY) * gridY;
}