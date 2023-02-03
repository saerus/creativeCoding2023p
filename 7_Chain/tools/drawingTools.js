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
function drawArrow(pos, dir, vitality) {
    push();
    translate(pos.x, pos.y);
    rotate(dir.heading());
    //
    scale(dir.mag());
    strokeWeight(1 / dir.mag());
    //
    line(0, 0, 1, 0);
    line(1, 0, 0.9, -0.1);
    line(1, 0, 0.9, 0.1);
    //
    pop();
    //
    if (vitality > 0) {
        setTimeout(() => {
            // Après 10 millièmes de secondes
            for (let i = 0; i < 5; i++) {
                let newPos = pos.copy().add(dir);
                let forRandomAngle = PI / 5;
                let newDir = dir.copy().rotate(random(-forRandomAngle, forRandomAngle)).mult(random(0.7, 0.9));
                let newVitality = floor(random(0, vitality));
                drawArrow(newPos, newDir, newVitality);
            }
        }, random(20, 120));
    }
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

function gridifyX(n) {
    return round(n / gridX) * gridX;
}
function gridifyY(n) {
    return round(n / gridY) * gridY;
}