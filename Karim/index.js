let dotsObjects = [];
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    let a = createVector(gridifyX(mouseX), gridifyY(mouseY));
    let b = getPointAround(a.x, a.y, 5);
    // motifs(a, b);
    codebar(a, b);
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(2);
    smooth();
    calculateGrid();
    //
    background(255);
    rectMode(CORNERS);
    //
}
// P5JS draw
function draw() {
    for(let i=dotsObjects.length-1; i>=0; i--) {
        if(dotsObjects[i].size<=0) {
            dotsObjects.splice(i, 1);
        } else {
            dotsObjects[i].draw();
        }
    }
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(255);
    }
}