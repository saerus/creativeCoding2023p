let ocrImg;
// P5JS preload
function preload() {
    ocrImg = loadImage("assets/fullHD.png");
}
// user input
function mousePressed() {
    // let x = gridifyX(mouseX);
    // let y = gridifyY(mouseY);
    // let a = createVector(x, y);
    // let b = a.copy();
    // b.x+=columnWidth;
    // drawCutImage(a, b, 50);
    //
    let delay = 0;
    for(let y=0; y<gridQttY; y++) {
        for(let x=0; x<gridQttX; x++) {
            let a = createVector(x*columnWidth, y*rowHeight);
            let b = a.copy();
            b.x+=columnWidth;
            b.y+=rowHeight;
            delay+=10;
            setTimeout(()=>{
                drawDisplacedImage(a, b);
            }, delay);
        }
    }
    //
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
}
// P5JS draw
function draw() {
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