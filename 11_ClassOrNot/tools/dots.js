// ------------------ version 1 fonction + setTimeout
function movingDot(pos, t, col) {
    if(t == null) {
        t = random(0, 1);
    }
    fill(col);
    ellipse(pos.x, pos.y, 10, 10);
    //
    function reproduce() {
        let n = noise(pos.x/500, pos.y/500, t/100);
        let angle = map(n, 0, 1, 0, PI*8);
        let vel = createVector(cos(angle), sin(angle));
        // let vel = createVector(random(-1, 1), random(-1, 1));
        vel.mult(2);
        let newPos = pos.copy().add(vel);
        movingDot(newPos, t, col);
    }
    //
    setTimeout(reproduce, 10);
}
// ------------------ version class
class MovingDotC {
    constructor(pos) {
        this.pos = pos.copy();
        this.t = random(0, 1);
        this.size = 100;
        this.shrinkBy = random(0.01, 0.5);
        this.color = color(255, 0, 0);
    }
    update() {
        let n = noise(this.pos.x/500, this.pos.y/500, this.t/10);
        let angle = map(n, 0, 1, 0, PI*8);
        let vel = createVector(cos(angle), sin(angle));
        vel.mult(2);
        this.pos.add(vel);
        this.size-=this.shrinkBy;
    }
    draw() {
        fill(this.color);
        
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
    changeColor() {
        this.color = color(0, 255, 0);
    }
}