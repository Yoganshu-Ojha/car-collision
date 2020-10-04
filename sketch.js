var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 100, 50);
  car.velocityX = speed;
  car.shapeColor = "White";

  wall = createSprite(1500, 200, 60, height / 2);
  car.shapeColor = "Lavender";
}

function draw() {
  background("black");

  collision();

  drawSprites();
}

function collision() {
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) / 22509;
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0);
    }
    if (180 > deformation && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation < 100) {
      car.shapeColor = color(0, 255, 0);
    }
  }
}
