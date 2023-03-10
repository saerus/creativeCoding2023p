let gridQttX = 25;
let gridQttY = 20;
let columnWidth;
let rowHeight;
let img;
let imgShana;
let imgKarim;
let imgNyria;
let imgLaurine;
// Liste
// P5JS preload
function preload() {
    img = loadImage("assets/imgB.png");
    imgShana = loadImage("assets/shana.jpg");
    imgKarim = loadImage("assets/Montreal_Canadiens.png");
    imgNyria = loadImage("assets/nyria.png");
    imgLaurine = loadImage("assets/garden-flowers.png");
}
// user input
function mousePressed() {
    let x = gridifyX(mouseX);
    let y = gridifyY(mouseY);
    let a = createVector(x, y);
    let b = getPointAround(x, y, 3);
    let c = a.copy();
    let d = b.copy();
    //
    let randomFunction = floor(random(0, 6));
    // randomFunction = 2;
    if(randomFunction == 0) {
        shana(a, b, imgNyria);
    }
    if(randomFunction == 1) {
        marc(a, b);
    }
    if(randomFunction == 2) {
        for(let i=0; i<5; i+=1) {
            for(let j=0; j<5; j+=1) {
                console.log(i);
                let modifedByI = a.copy();
                modifedByI.x+=columnWidth*i;
                modifedByI.y+=rowHeight*j;
                brikeld(modifedByI);
            }
        }
    }
    if(randomFunction == 3) {
        jonathan(a, b);
    }
    if(randomFunction == 4) {
        shana(a, b, imgShana);
    }
    if(randomFunction == 5) {
        shana(a, b, imgKarim);
    }
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    // smooth();
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
//
function keyPressed() {
    console.log(keyCode);
    if(keyCode  == 71) {
        drawGrid();
    }
    if(keyCode  == 32) {
        background(255);
    }
}

// P5JS draw
function draw() {
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
//
function getPointAround(x, y, dst = 1) {
    let dirX = 1;
    if(random(0, 1) <0.5) {
        dirX = -1;
    }
    let dirY = 1;
    if(random(0, 1) <0.5) {
        dirY = -1;
    }
    let qttX = floor(random(1, dst))*columnWidth;
    let qttY = floor(random(1, dst))*rowHeight;
    return createVector(x+qttX*dirX, y+qttY*dirY);
}
function gridifyX(n) {
    return round(n/columnWidth)*columnWidth;
}
function gridifyY(n) {
    return round(n/rowHeight)*rowHeight;
}
function drawGrid() {
    for(let x=0; x<gridQttX; x++) {
        line(x*columnWidth, 0, x*columnWidth, height);
    }
    for(let y=0; y<gridQttY; y++) {
        line(0, y*rowHeight, width, y*rowHeight);
    }
}