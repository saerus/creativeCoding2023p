function motifs(k, l) {
	let distance = 100;
	let tran1 = createVector(distance, 0);
	push();
	translate(k.x, k.y);
	let diff = l.copy().sub(k);
	rotate(diff.heading());
	stroke(0);
	//line(0, 0, diff.mag(), 0);
	rectMode(CENTER);
	let qttShape = round(diff.mag() / 50);
	let realTrans = diff.mag() / qttShape;
	//let possibleShapes=[]; // ,triangle(100, 0, 125, 0, 100, 25), triangle(100,0,125,0,100,-25)
	for (let i = 0; i <= qttShape; i++) {
		//random(possibleShapes)();
		let r = floor(random(2));
		if (r == 0) {
			rect(0, 0, 25, 50);
		} else if (r == 1) {
			ellipse(0, 0, 25)
		}
		translate(realTrans, 0);
	}
}