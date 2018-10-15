var angle = 0;
var w = 80;
var cols;
var rows;
var curves = [];
var inc = 0.02;
var div = 3;
var done = false;

function setup() {
  createCanvas(800, 800);
  // For HiDPI displays
  // pixelDensity(2);
  cols = width / w - 1;
  rows = height / w - 1;
  for(var i = 0; i < rows; i++){
    curves[i] = [];
    for(var j = 0; j < cols; j++){
      curves[i][j] = new Curve();
    }
  }
  // curves = new Curve[rows][cols];

  // for (var j = 0; j < rows; j++) {
  //   for (var i = 0; i < cols; i++) {
  //     curves[j][i] = new Curve();
  //   }
  // }
}
var count = 0;
function draw() {
  background(0);
  var d = w - 0.2*w;
  var r = d/2;

  noFill();
  stroke(255);
  for (var i = 0; i < cols; i++) {
    var cx = w + i * w + w / 2;
    var cy = w / 2;
    strokeWeight(1);
    stroke(255);
    ellipse(cx, cy, d, d);
    var x = r * cos(angle * (i + 1.25) - HALF_PI);
    var y = r * sin(angle * (i + 1.25) - HALF_PI);
    strokeWeight(8);
    stroke(255);
    point(cx + x, cy + y);
    colorMode(RGB)
    stroke(255, 150);
    strokeWeight(1);
    line(cx + x, 0, cx + x, height);

    for (var j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x);
    }
  }

  noFill();
  stroke(255);
  for (var j = 0; j < rows; j++) {
    var cx = w / 2;
    var cy = w + j * w + w / 2;
    strokeWeight(1);
    stroke(255);
    ellipse(cx, cy, d, d);
    var x = r * cos(angle * (j + 1.5) - HALF_PI);
    var y = r * sin(angle * (j + 1.5) - HALF_PI);
    strokeWeight(8);
    stroke(255);
    point(cx + x, cy + y);
    colorMode(RGB)
    stroke(255,150);
    strokeWeight(1);
    line(0, cy + y, width, cy + y);

    for (var i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y);
    }
  }
  count++;
  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      if(count % div == 0 && !done)
      curves[j][i].addPoint();
      curves[j][i].show();
    }
  }


  angle -= inc;

  if (angle < -TWO_PI) {
    for (var j = 0; j < rows; j++) {
      for (var i = 0; i < cols; i++) {
        // curves[j][i].reset();
        done = true;
      }
    }
    angle = 0;
  }
}
