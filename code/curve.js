function Curve() {
  this.c = random(255)
  this.path = [];
  this.current = createVector(0,0);

  this.setX = function(x) {
    this.current.x = x;
  }

  this.setY = function(y) {
    this.current.y = y;
  }

  this.addPoint = function() {
    this.path.push(this.current);
  }

  this.reset = function() {
    console.log(this.path.length);
    this.path = [];
  }

  this.show = function() {
    colorMode(HSB)
    stroke(this.c,255,255);
    strokeWeight(1);
    noFill();
    beginShape();
    for(var i = 0; i < this.path.length; i++){
      var v = this.path[i];
      vertex(v.x, v.y);
    }
    endShape();

    strokeWeight(8);
    point(this.current.x, this.current.y);
    this.current = createVector();
  }
}
