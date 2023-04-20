function gradientArc(a, b) {
    //
    let details = 50;
    let colorScale = [
        color(255, 0, 0),
        color(255, 0, 255),
        color(0, 255, 0),
        color(0, 255, 255),
        color(0, 0, 0),
        color(255, 255, 255)
    ];
    //
    let colorStart = random(colorScale);
    let colorEnd = random(colorScale);
    //
    push();
    //
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(1/details);
    noFill();
    //
    for(let i=0; i<details; i++) {
        let normalizedI = i/details;
        let color = lerpColor(colorStart, colorEnd, normalizedI);
        stroke(color);
        arc(0, 0, normalizedI, normalizedI, 0, PI/4);
    }
    //
    pop();
}