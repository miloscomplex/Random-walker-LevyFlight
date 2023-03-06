class Walker {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.prevPos = this.pos.copy();
    }
  
    update() {
      this.prevPos = this.pos.copy();
      let step = p5.Vector.random2D();
      // default is one unit for the vector
      let r = random(100);
      if (r < 1) {
        step.mult(random(20, 50));
      } else {
        step.setMag(2);
      }
      this.pos.add(step);
    }
  
    show() {
      stroke(255, 50);
      strokeWeight(2);
      //fill (255, 100);
      //ellipse(this.pos.x, this.pos.y, 2);
      line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) { 
            this.pos.y = height;
        }

    }
  }