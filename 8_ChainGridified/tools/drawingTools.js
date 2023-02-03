// Draw arrow from A to B
function drawArrowFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    //
    stroke(255);
    strokeWeight(2 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    stroke(0);
    strokeWeight(1 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    pop();
    //
    setTimeout(() => {
        let randomDistance = round(random(1, 3));
        let c = getPointAround(b, randomDistance);
        drawArrowFromTo(b, c);
    }, 10);
}