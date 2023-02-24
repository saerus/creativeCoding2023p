let gridQttX = 10;
let gridQttY = 10;
let columnWidth;
let rowHeight;
let img;
// P5JS preload
function preload() {
    img = loadImage("assets/imgA.png");
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
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
}
// P5JS draw
function draw() {
    if (mouseIsPressed) {
        let a = getRandomPoint();
        let b = a.copy();
        b.x+=columnWidth;
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
    scale(columnWidth, rowHeight);
    strokeWeight(1 / dir.mag());
    // ICI
    // line(0, 0, 1, 0);
    // line(1, 0, 0.99, -0.01);
    // line(1, 0, 0.99, 0.01);
    translate(0.5, 0.5);
    noStroke();
    fill(255);
    rect(0, 0, 1, 1);
    if(random(0, 1)<0.5) {
        rotate(PI/2);
    }
    image(img, 0, 0, 1, 1);
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
    return round(n/columnWidth)*columnWidth;
}
function gridifyY(n) {
    return round(n/rowHeight)*rowHeight;
}