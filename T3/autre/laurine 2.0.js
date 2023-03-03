// Draw arrow from A to B
function drawFromTo(a, b) {
    push();
   
    translate(a.x, a.y);
    let dir = b.sub(a);
    rotate(dir.heading());
    scale(columnWidth, rowHeight);
    strokeWeight(1 / dir.mag());
    stroke(255,201,266);
fill(255,204,100);

    quad(0.1, 0.35, 0.86, 0.20, 0.69, 0.63, 0.30, 0.76);
   
 
    
    
    // stroke(255, 0, 0);
    // line(0, 0, 1, 0);
    // line(1, 0, 0.99, -0.01);
    // line(1, 0, 0.99, 0.01);
    noStroke();
    push();
    translate(0.5, 0.5);
    if(random(0, 1) < 0.5) {
        rotate(PI/2);
    }
    translate(-0.5, -0.5);
    fill(255);
    // ellipse(0.5, 0.5, 1, 1);
    fill(0);
    //
    //
    
    // vertex(0, 0);
    // vertex(0.5, 0);
    // vertex(1, 0.5);
    // vertex(1, 1);
    // vertex(0.5, 1);
    // vertex(0, 0.5);
    // endShape(CLOSE);
    //
    pop();
    //
    pop();
}