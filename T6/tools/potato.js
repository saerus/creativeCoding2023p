function potato(a, b) {
    let layers = 10;
    let qttPerLayer = 200;
    let qttDeform = 100;
    //
    push();
    //
    translate(a.x, a.y);
    let dir = b.copy().sub(a);
    rotate(dir.heading());
    // scale(dir.mag());
    // strokeWeight(1/dir.mag());
    //
    // line(0, 0, 1, 0);
    // point(0, 0);
    noStroke();
    fill(0);
    //
    for(let i=0; i<layers; i+=1) {
        let normalizedI = map(i, 0, layers, 0, 0.1); // ou i/layers
        for(let j=0; j<qttPerLayer; j++) {
            let normalizedJ = map(j, 0, qttPerLayer, 0, 1); // ou j/qttPlayer
            let angle = normalizedJ*PI*2;
            let offsetX = map(cos(angle+normalizedI), -1, 1, 0, 2);
            let offsetY = map(sin(angle+normalizedI), -1, 1, 0, 2);
            let randomDst = map(noise(offsetX, offsetY, frameCount), 0, 1, -qttDeform, qttDeform);  // random(0, 1)
            // let randomDst = map(random(0, 1), 0, 1, -qttDeform, qttDeform);  // random(0, 1)
            let x = cos(angle)*(i*10+50+randomDst);
            let y = sin(angle)*(i*10+50+randomDst);
            ellipse(x, y, 4, 4);
        }
    }
    pop();
}