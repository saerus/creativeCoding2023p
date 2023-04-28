function papaye(a) {
    // console.log("p");
    let start = 0;
    let end = 10;
    let size = 1;
    // fill(255, 0, 0);
    noFill();
    stroke(255, 0, 0);
    for (let i = start; i < end; i++) {
        ellipse(a.x, a.y, i * size, i * size);
    }
}
//
class Papaye {
    constructor(a) {
        this.start = -4;
        this.end = 0;
        this.size = 10;
        this.a = a;
    }
    animate() {
        //
        this.start +=0.1;
        this.end +=0.1;
        //
    }
    display() {
        noFill();
        stroke(255, 0, 0);
        let fStart = floor(this.start);
        let fEnd = floor(this.end);
        //
        if(fStart < 0) {
            fStart = 0;
        }
        if(fStart > 10) {
            fStart = 100;
        }
        if(fEnd < 0) {
            fEnd = 0;
        }
        if(fEnd > 10) {
            fEnd = 10;
        }
        //
        for (let i = fStart; i < fEnd; i++) {
            ellipse(this.a.x, this.a.y, i * this.size, i * this.size);
        }
    }
}