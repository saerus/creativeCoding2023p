function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}
// Draw arrow from A to B
function drawCutImage(a, b, vitality = 0) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    //
    // line(0, 0, 1, 0);
    // image(ocrImg, 0, 0, 1, 1);
    let cutX = random(-0.5, 0.5)*ocrImg.width;
    let cutY = random(-0.5, 0.5)*ocrImg.height;
    copy(ocrImg, cutX, cutY, ocrImg.width, ocrImg.height, 0, 0, 1, 1);
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
// Draw arrow from A to B
function drawDisplacedImage(a, b) {
    // let dst = b.copy().sub(a);
    // or
    let w = b.x-a.x;
    let h = b.y-a.y;
    //
    let imgAX = map(a.x, 0, width, 0, ocrImg.width);
    let imgAY = map(a.y, 0, height, 0, ocrImg.height);
    let imgBX = map(b.x, 0, width, 0, ocrImg.width);
    let imgBY = map(b.y, 0, height, 0, ocrImg.height);
    let imgA = createVector(imgAX, imgAY);
    let imgB = createVector(imgBX, imgBY);
    let imgW = imgB.x-imgA.x;
    let imgH = imgB.y-imgA.y;
    //
    imgA.x += random(-10, 10);
    imgA.y += random(-10, 10);
    imgA.x += noise(a.x, a.y)*100-50;
    imgA.y += noise(a.y)*100-50;
    //
    copy(ocrImg, imgA.x, imgA.y, imgW, imgH, a.x, a.y, w, h);
    // debug
    // noFill();
    // rect(a.x, a.y, b.x, b.y);
}
