let gridQttX = 15;
let gridQttY =10;
let columnWidth;
let rowHeight;
let img;

// P5JS preload
function preload() {
    img = loadImage("assets/imgB.png");
}
// user input
function mousePressed() {
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    //
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
    //
    background(255);
    rectMode(CENTER);
    imageMode(CENTER);
    // blendMode(EXCLUSION);
    //
}
// P5JS draw
function draw() {
    if (mouseIsPressed) {
        let a = getRandomPoint();
        let b = a.copy();
        b.x+=columnWidth;
        // b.y+=rowHeight;
        casey(a, b);
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
}
// Draw arrow from A to B

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