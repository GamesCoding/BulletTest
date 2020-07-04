var thickness,wall;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  rectMode(CENTER);

  bullet=createSprite(50,200,50,50);
  bullet.shapeColor=("white");

  wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0);
  
  bullet.velocityX = speed;

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage<10) {
      bullet.shapeColor=("green");
    }

    if(damage>10) {
      bullet.shapeColor=("red");
    }
  }
  
  drawSprites();
}