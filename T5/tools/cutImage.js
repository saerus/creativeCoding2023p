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
}
