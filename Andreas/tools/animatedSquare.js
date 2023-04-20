class AnimatedSquare {
    constructor() {
        this.pos = createVector(0, 0);
        this.posGoal = createVector(0, 0);
    }
    setFromXY(x, y) {
        this.posGoal.x = x;
        this.posGoal.y = y;
    }
    draw() {
        //
        this.pos.x += (this.posGoal.x-this.pos.x)/10;
        this.pos.y = lerp(this.pos.y, this.posGoal.y, 0.1);
        //
        ellipse(this.pos.x, this.pos.y, 100);
    }
}