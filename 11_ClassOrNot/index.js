let dotsObjects = [];
// let dot1;
// let dot2;
// P5JS preload
function preload() {
}
// user input
function mousePressed() {
    // -------------------------------- FUNCTION VERSION
    // let qtt = 10;
    // for(let i=0; i<qtt; i++) {
    //     let angle = TAU/qtt*i;
    //     let x = cos(angle)*100;
    //     let y = sin(angle)*100;
    //     let pos = createVector(mouseX+x, mouseY+y);
    //     movingDot(pos, 0, color(0, 255, ));
    // }
    // -------------------------------- CLASS VERSION
    let qtt = 10;
    for(let i=0; i<qtt; i++) {
        let angle = TAU/qtt*i;
        let x = cos(angle)*100;
        let y = sin(angle)*100;
        let pos = createVector(mouseX+x, mouseY+y);
        ///movingDot(pos, i, color(255, 0, 0));
        let dotObject = new MovingDotC(pos, i);
        dotsObjects.push(dotObject);
    }
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
            dotsObjects[i].update();
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