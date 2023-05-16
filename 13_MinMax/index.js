let pgA;
let pgB;
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let a = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let b = getPointAround(a.x, a.y, 3);
    deformedChar(pgA, a, b, "X");
    //
    let c = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let d = getPointAround(c.x, c.y, 3);
    deformedChar(pgB, c, d, ".......");
    //
    // let g = new AnimatedGridClass(a, b, 10, 10);
    // animatedGrids.push(g);
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1); // change to 2 !
    smooth();
    calculateGrid();
    //
    background(247, 246, 243);
    rectMode(CORNERS);
    pgA = createGraphics(width, height);
    pgB = createGraphics(width, height);
    // pgA.background(0, 255, 0);
    // pgB.background(0, 0, 255);
    //
}
// P5JS draw
function draw() {
    background(255, 0, 0);
    image(pgA, 0, 0, width, height);
    image(pgB, 0,0, width, height);
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    if (key == "p") {
        pgA.clear();
    }
    if (key == "s") {
        background(255);
    }
    if (key == "g") {
        drawGrid();
    }
}