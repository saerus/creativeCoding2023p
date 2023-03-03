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
        drawFromTo(a, b);
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    columnWidth = round(width/gridQttX);
    rowHeight = round(height/gridQttY);
}
// Draw arrow from A to B
function drawFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(columnWidth, rowHeight);
    strokeWeight(1 / dir.mag());
    fill(0);
    // stroke(255, 0, 0);
    // line(0, 0, 1, 0);
    // line(1, 0, 0.99, -0.01);
    // line(1, 0, 0.99, 0.01);
    noStroke();
    push();
    translate(0.5, 0.5);
    if(random(0, 1) < 0.5) {
        rotate(PI/2);
    }
    translate(-0.5, -0.5);
    fill(255);
    // ellipse(0.5, 0.5, 1, 1);
    fill(0);
    //
    //
    image(img, 0.5, 0.5, 1, 1);
    // beginShape();
    // vertex(0, 0);
    // vertex(0.5, 0);
    // vertex(1, 0.5);
    // vertex(1, 1);
    // vertex(0.5, 1);
    // vertex(0, 0.5);
    // endShape(CLOSE);
    //
    pop();
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