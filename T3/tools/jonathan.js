function jonathan(a, b) {
    let n = round(a.dist(b));
    let dots = antDots(n);
    //scale
    let s = 0.15 * a.dist(b);
    stroke(0);
    push();
    let tx = a.x + 0.5 * (b.x - a.x);
    let ty = a.y + 0.5 * (b.y - a.y);
    translate(tx, ty);
    for (let i = 0; i < n; i++) {
        let mode = round(random(0, 3));
        switch (mode) {
            case 0:
                point(dots[i].x*s, dots[i].y*s);
                break;
            case 1:
                circle(dots[i].x*s, dots[i].y*s, random(10));
                break;
            case 2:
                square(dots[i].x*s, dots[i].y*s, random(10));
                break;
            case 3:
                break;
            default:
              //  
          }
    }
    pop();
}

function antDots(n) {
    let dots = [];
    dots.push(createVector(0, 0));
    for (let i = 1; i < n; i++) {
        let x = dots[i-1].x + round(random(-1, 1));
        let y = dots[i-1].y + round(random(-1, 1));
        let v = createVector(x, y);
        dots.push(v);
    }
    return dots;
}
