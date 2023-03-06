let x;
let y;
let pos;
let walker;

function setup() {
  createCanvas(1000, 500);
  walker = new Walker(0, 0);
  console.log(walker);
  background(0);
}

function draw() {

  translate(width / 2, height / 2);
  // let v = p5.Vector.random2D()
  // v.mult(random(20, 100));

  walker.update();

  walker.show();
}