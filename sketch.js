function preload() {
  // put preload code here
}
var diameter;
var angle = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  diameter = 20;
}

function draw() {
  // put drawing code here
  for (var x = 25; x < width; x += 25) {
    line(x, 0, x, height);
  }
  for (var y = 25; y < height; y += 25) {
    line(0, y, width, y);
  }
  for (var x1 = 25; x1 < width; x1 += 25) {
    for (var y1 = 25; y1 < height; y1 += 25) {
      var r = random();

      if (r > 0.5) {
        fill("black");
        stroke("white");
        strokeWeight(2);
      } else {
        fill("white");
        stroke("black");
        strokeWeight(0.5);
      }
      var d1 = 2 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2;

      ellipse(x1, y1, d1, d1);
      angle += 0.05;
    }
  }
}
