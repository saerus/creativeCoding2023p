let animatedGrids = [];
let animatedLines = [];
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let a = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let b = getPointAround(a.x, a.y, 5);
    animatedGrid(a, b, 10, 10);
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
    //
}
// P5JS draw
function draw() {
    background(210);
    // animatedGrids.forEach((ag)=>{
    //     ag.draw();
    // });
    animatedLines.forEach((l)=>{
        l.draw();
    });
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    if (key == "s") {
        background(255);
    }
    if (key == "g") {
        drawGrid();
    }
}