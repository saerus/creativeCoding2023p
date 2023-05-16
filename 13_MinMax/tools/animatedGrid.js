function deformedChar(pg, a, b, txt) {
    //
    // let leftTop = a.copy();
    // let rightBottom = b.copy();
    let leftTop = createVector(min(a.x, b.x), min(a.y, b.y));
    let rightBottom = createVector(max(a.x, b.x), max(a.y, b.y));
    //
    pg.noStroke();
    pg.push();
    pg.translate(leftTop.x, leftTop.y);
    let dir = rightBottom.copy().sub(leftTop);
    pg.scale(dir.x / 10, dir.y / 10);
    pg.textSize(9);
    pg.textAlign(CENTER, CENTER);
    pg.textFont('Mono');
    pg.fill(0);
    pg.text(txt, 5, 5);
    pg.pop();
    pg.fill(255, 0, 0);
    pg.ellipse(a.x, a.y, 10, 10);
    pg.ellipse(b.x, b.y, 10, 10);
}