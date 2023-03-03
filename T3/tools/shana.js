function shana(a, b, imgToDraw) {
    console.log("shana");
    push();
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(dir.mag());
    noStroke();
    push();
    translate(0.5,0.5);
    if(random(0,1) < 0.5) {
        rotate(PI/2);
    }  
    translate(-0.5, -0.5);
    // blendMode(MULTIPLY);
    //filter(POSTERIZE, 3);
    image(imgToDraw,0,0,0.5,0.5);
    pop();
    pop();
}
