let ocrImg;
// P5JS preload
function preload() {
    ocrImg = loadImage("assets/fullHD.png");
}
// user input
function mousePressed() {
    //
    for(let y = 0; y < gridQttY; y++) {
        //boucle pour chaque column
            for(let x = 0; x < gridQttX; x++) {
             //boucle pour chaque row
            let posX = x * columnWidth; //calcul de la position x (augmente de columnwidth a chaque iteration)
            let posY = y * rowHeight; //calcul de la position y (augmente de rowHeight a chaque iteration)
            let topLeft = createVector(posX, posY);
            let bottomRight = createVector(posX+columnWidth, posY+rowHeight);
            //
            drawDisplacedImage(topLeft, bottomRight);
        }
    }
    //drawDisplacedImage();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1); // change to 2 !
    smooth();
    calculateGrid();
    //
    background(255);
    rectMode(CORNERS);
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
    console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(255);
    }
}