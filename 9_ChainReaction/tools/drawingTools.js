// Draw arrow from A to B
function drawArrowFromTo(a, b, vitality) {
    push();
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    //
    // stroke(255);
    // strokeWeight(2 / dir.mag());
    // line(0, 0, 1, 0);
    // line(1, 0, 0.9, -0.1);
    // line(1, 0, 0.9, 0.1);
    //
    stroke(0);
    strokeWeight(1 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    pop();
    //
    if (vitality > 0) {
        vitality--;
        setTimeout(() => {
            random
            if (random(0, 1) < 0.05) {
                drawTower(b, vitality);
            } else {
                let randomDistance = round(random(1, 3));
                let c = getPointAround(b, randomDistance);
                drawArrowFromTo(b, c, vitality);
            }
        }, 50);
    }
}
//
function drawTower(b, vitality) {
    let randomQtt = 10;
    for (let i = 0; i < randomQtt; i++) {
        let newA = createVector(b.x, b.y + gridY * i);
        let newB = createVector(b.x + gridX, b.y + gridY * (i + 1));
        drawArrowFromTo(newA, newB, vitality);
    }
}