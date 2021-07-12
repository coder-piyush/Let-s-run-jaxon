var trackimg;
var boy_running;
var runner;
function preload() {
  //pre-load images
  trackimg = loadImage("path.png")
  boy_running = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png", "jake5.png")
}

function setup() {
  createCanvas(400, 600);
  //create sprites here
  path = createSprite(200, 200)
  path.addImage(trackimg)
  path.velocityY = 4;
  path.scale = 1.2;
  
  runner = createSprite(200, 400, 30, 30)
  runner.addAnimation("runner", boy_running)
  runner.scale = 0.5;

}

function draw() {
  background("white");

  runner.x = mouseX;

  if (path.y > 400) {
    path.y = width/2;
  }

  if (runner.x < 100) {
    runner.x = 100;
  }
  
  else if (runner.x > 340) {
    runner.x = 340;
  }


  drawSprites();
  text(mouseX,mouseX,runner.y-100)
}