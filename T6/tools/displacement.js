function drawDisplacedImage(a, b, img) {
    let rW = random(0, 0);
    let rH = random(0, 0);
    let noiseX = noise(a.x);
    let rX = map(noiseX, 0, 1, -100, 100);
    let noiseY = noise(a.y);
    let rY = map(noiseY, 0, 1, -100, 100);
    //
    let srcX = map(a.x, 0, width, 0, img.width);
    let srcY = map(a.y, 0, height, 0, img.height);
    let srcW = map(columnWidth, 0, width, 0, img.width);
    let srcH = map(rowHeight, 0, height, 0, img.height);
    //
    copy(img, srcX+rX, srcY+rY, srcW, srcH, a.x, a.y, columnWidth, rowHeight);
}