var wall,thickness;
var bullet,speed,weight;
var damage;

function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(100,200,30,10);
  bullet.velocityX=speed;
  thickness=random(22,83);
  wall=createSprite(750,200,thickness,200);}

function draw() {
  background("purple");  
  drawSprites();
  collide();
}

function collide(){
  if(wall.x-bullet.x<30&&bullet.x-wall.x<30){
    bullet.velocityX=0;
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
  bullet.x-wall.x==thickness;
  }

 if(damage>15){
    wall.shapeColor="red";
  }
  else{
    wall.shapeColor="green";
  }}