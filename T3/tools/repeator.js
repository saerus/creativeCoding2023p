function repeator(a, b) {
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    strokeWeight(1/dir.mag());
    //
    // line(0, 0, 1, 0);
    //
    textSize(1);
    for(let i=0; i<10; i++) {
        let gray = map(i, 0, 10, 255, 0);
        fill(gray);
        scale(1.1);
        text("F", -0.5, 0.5);
    }
    //
    pop();
}