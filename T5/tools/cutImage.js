function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}




// Draw arrow from A to B
function drawDisplacedImage(topLeft, bottomRight) {
    // rect(topLeft.x, topLeft.y, bottomRight.x, bottomRight.y);
    // ellipse(topLeft.x, bottomRight.y, 10, 10);
    let rW = random(0, 0);
    let rH = random(0, 0);
    let noiseX = noise(topLeft.x);
    let rX = map(noiseX, 0, 1, -50, 50);
    let rY = random(-0, 0);
    //
    let srcX = map(topLeft.x, 0, width, 0, ocrImg.width);
    //let srcX = topLeft.x/width*ocrImg.width; // règle de trois
    let srcY = map(topLeft.y, 0, height, 0, ocrImg.height);
    let srcW = map(columnWidth, 0, width, 0, ocrImg.width);
    let srcH = map(rowHeight, 0, height, 0, ocrImg.height);
    //
    copy(ocrImg, srcX+rX, srcY+rY, srcW, srcH, topLeft.x, topLeft.y, columnWidth, rowHeight);
}














// Draw arrow from A to B
function drawCutImage(a, b, vitality = 0) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    //
    pop();
    //
    function createChild() {
        vitality--;
        if (vitality > 0) {
            let c = b.copy();
            c.x+=columnWidth;
            drawCutImage(b,c, vitality);
            
        }
    }
    //
    setTimeout(createChild, 20);
}