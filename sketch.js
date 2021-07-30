var ship, ShipAnimation;
function preload(){
loadShipAnimation["ship-1.png", "ship-2.png", "ship-3.png", "ship-4"];
loadSea["sea.png"];
}

function setup(){
  createCanvas(400,400);
  var sea = createSprite (200, 400, 10, 5);
  sea.velocityX = -5;
  if (sea.x < 400){
    sea.x = 200;
  }
  var ship = createSprite (205, 395, 5, 3);
  if (key_down("space")){
    ship.velocityX = ship.velocityX + 5;
    ship.velocityY = ship.velocityY + 5
  }
  ship.velocityX - 5;
  ship.velocityY - 5;
}
ship.collide(sea);
function draw() {
  background("blue");
 
}