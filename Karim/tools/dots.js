// version 1 fonction + setTimeout
function movingDot(pos, t, vitality = 10) {
    if(t == null) {
        t = random(0, 1);
    }
    ellipse(pos.x, pos.y, 10, 10);
    //
    function reproduce() {
        let n = noise(pos.x/500, pos.y/500, t/100);
        let angle = map(n, 0, 1, 0, PI*8);
        let vel = createVector(cos(angle), sin(angle));
        vel.mult(2);
        let newPos = pos.copy().add(vel);
        movingDot(newPos, t, vitality);
    }
    //
    if(vitality>0) {
        vitality--;
        setTimeout(reproduce, 10);
    }
}
// version class
class MovingDotC {
    constructor(pos) {
        this.pos = pos.copy();
        this.t = random(0, 1);
        this.size = 10;
        this.shrinkBy = random(0.01, 0.1);
    }
    draw() {
        let n = noise(this.pos.x/500, this.pos.y/500, this.t/10);
        let angle = map(n, 0, 1, 0, PI*8);
        let vel = createVector(cos(angle), sin(angle));
        vel.mult(2);
        this.pos.add(vel);
        this.size-=this.shrinkBy;
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}