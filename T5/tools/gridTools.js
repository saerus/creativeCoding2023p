let gridQttX = 50;
let gridQttY = 4;
let columnWidth;
let rowHeight;
//
function calculateGrid() {
    columnWidth = (width/gridQttX);
    rowHeight = (height/gridQttY);
}
//
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
    let qttX = floor(random(1, dst+1))*columnWidth;
    let qttY = floor(random(1, dst+1))*rowHeight;
    return createVector(x+qttX*dirX, y+qttY*dirY);
}
function getPointInSimlarDirection(x, y, starterAngle) {
    let randomAngle = random(-PI/8, PI/8);
    let finalAngle = starterAngle+randomAngle;
    return createVector(x+cos(finalAngle)*100, y+sin(finalAngle)*100);
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