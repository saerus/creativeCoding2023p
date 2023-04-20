let ocrImg;
// P5JS preload
function preload() {
    ocrImg = loadImage("assets/fullHD.png");
}
// user input
function mousePressed() {
    background(247, 246, 243);
    drawThreeExemples();
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
    drawThreeExemples();
}
function drawThreeExemples() {
    let a = createVector(gridifyX(width/4), gridifyY(height/2));
    let b = getPointAround(a.x, a.y, 2);
    potato(a, b);
    //
    let c = createVector(gridifyX(width/2), gridifyY(height/2));
    let d = getPointAround(c.x, c.y, 10);
    gradientArc(c, d);
    //
    let e = createVector(gridifyX(width/4*3), gridifyY(height/2));
    let f = getPointAround(e.x, e.y, 10);
    fake3D(e, f);
}
// P5JS draw
function draw() {
    //image(ocrImg, 0, 0, width, height);
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    calculateGrid();
}
function keyPressed() {
    // console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(247, 246, 243);
    }
}