function codebar(f, g) {
    rectMode(CORNER);
    stroke(0);
    let w = g.x - f.x;
    let h = g.y - f.y;
    console.log(w, h);
    push();
    translate(f.x, f.y);
    let left = 0;
    while (left < 1) {
        let randomW = random(0.01, 0.1);
        if (left + randomW > 1) {
            randomW = 1 - left;
        }
        if (random(0, 1) < 0.5) {
            fill(255);
        } else {
            fill(0);
        }
        rect(map(left, 0, 1, 0, w), 0, randomW * w, h);
        left += randomW;
    }
    pop();
}
