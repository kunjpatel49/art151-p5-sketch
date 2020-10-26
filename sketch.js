var carX = 420
var carY = 380
var carW = 161
var carH = 110
function setup() {
  createCanvas(1024, 1024);
  img = loadImage('image1.jpg');
  img2 = loadImage('final.png')
}

function draw() {
  background(220);
  image(img, 0, 0);
  image(img2,carX, carY)
  carX += 0.09
  carY -= 0.10
  carH -= 0.09
  carW -= 0.08
  if (carW >0 && carH > 0){
    img2.resize(carW, carH);
  }
}

function mousePressed() {

  print(img2.width + ", " + img2.height)
}