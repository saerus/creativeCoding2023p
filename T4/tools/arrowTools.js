function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}
// Draw arrow from A to B
function drawArrowFromTo(a, b, vitality = 0) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(2 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    pop();
    //
    function createChild() {
        vitality--;
        if (vitality > 0) {
            //let c = getPointAround(b.x, b.y, 3);
            for(let i=0; i<3; i++) {
                let c = getPointInSimlarDirection(b.x, b.y, dir.heading());
                drawArrowFromTo(b, c, vitality);
            }
        }
    }
    //
    setTimeout(createChild, random(100, 500));
}
