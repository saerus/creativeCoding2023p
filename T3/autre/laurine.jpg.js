// Draw arrow from A to B
function drawFromTo(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(columnWidth, rowHeight);
    strokeWeight(1 / dir.mag());
    fill(0);
    tint(0, 153, 204);
    noStroke();
    push();
    translate(0.5, 0.5);
    if(random(0, 1) < 0.5) {
        rotate(PI/2);
    }
    translate(-0.5, -0.5);
    fill(255);
    // ellipse(0.5, 0.5, 1, 1);
    fill(0);
    //
    //
    image(img, 0.5, 0.5, 1, 1);
    // beginShape();
    // vertex(0, 0);
    // vertex(0.5, 0);
    // vertex(1, 0.5);
    // vertex(1, 1);
    // vertex(0.5, 1);
    // vertex(0, 0.5);
    // endShape(CLOSE);
    //
    pop();
    //
    pop();
}