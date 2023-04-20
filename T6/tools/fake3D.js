function fake3D(a, b) {
    let qtt = 20;
    //
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    // scale(dir.mag());
    // strokeWeight(1/dir.mag());
    //
    // line(0, 0, 1, 0);
    //
    textAlign(CENTER, CENTER);
    textSize(50);
    for(let i=0; i<qtt; i++) {
        let gray = map(i, 0, qtt, 255, 0);
        fill(gray);
        scale(1.1);
        text("Z", 0, 0);
    }
    //
    pop();
}