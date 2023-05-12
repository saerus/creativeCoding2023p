function animatedGrid(pt1, pt2, ncolumns, nlines) {
    let w = (pt2.x - pt1.x);
    let h = (pt2.y - pt1.y);
    let wcolumn = w / ncolumns;
    let hcolumn = h / nlines;
    //
    for (let i = 0; i <= ncolumns; i++) {
        setTimeout(() => {
            let x1 = pt1.x + i * wcolumn;
            let y1 = pt1.y;
            let x2 = pt1.x + i * wcolumn;
            let y2 = pt2.y;
            // line(x1, y1, x2, y2);
            let tempLine = new AnimatedLine(x1, y1, x2, y2);
            animatedLines.push(tempLine);
        }, i * 200);
    }
    for (let i = 0; i <= nlines; i++) {
        setTimeout(() => {
            let x1 = pt1.x;
            let y1 = pt1.y + i * hcolumn;
            let x2 = pt2.x;
            let y2 = pt1.y + i * hcolumn;
            // line(x1, y1, x2, y2);
            let tempLine = new AnimatedLine(x1, y1, x2, y2);
            animatedLines.push(tempLine);
        }, i * 200);

    }
}

class AnimatedLine {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.time = 0;
        this.speed = random(0.0001, 0.1);
    }
    draw() {
        //
        this.time = this.time + this.speed;
        if (this.time > 1) {
            this.time = 1;
        }
        //
        let fx2 = lerp(this.x1, this.x2, this.time);
        let fy2 = lerp(this.y1, this.y2, this.time);
        line(this.x1, this.y1, fx2, fy2);
    }
}