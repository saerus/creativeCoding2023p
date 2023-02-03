let gridXQtt = 10;
let gridYQtt = 5;
let gridX, gridY;
//
function drawDebugLine(pos, dir) {
    line(pos.x, pos.y, pos.x + dir.x, pos.y + dir.y);
}
function drawDebugLineFromTo(a, b) {
    line(a.x, a.y, b.x, b.y);
}
// Draw arrow pos + dir
function drawArrow(pos, dir) {
    push();
    translate(pos.x, pos.y);
    rotate(dir.heading());
    scale(50);
    strokeWeight(1 / 50);
    //
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    pop();
}
// Draw arrow from A to B
function drawArrowFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(2 / dir.mag());
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    pop();
    //
}
function getRandomPoint() {
    let x = random(0, width);
    let y = random(0, height);
    x = gridifyX(x);
    y = gridifyY(y);
    return createVector(x, y);
}

function gridifyX(n) {
    return round(n / gridX) * gridX;
}
function gridifyY(n) {
    return round(n / gridY) * gridY;
}