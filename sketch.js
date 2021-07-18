function preload(){
  bg = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png");
  gym = loadAnimation("Images/gym1.png","Images/gym2.png");
  eat = loadAnimation("Images/eat1.png","Images/eat2.png");
  drink = loadAnimation("Images/drink1.png","Images/drink2.png");
  move = loadAnimation("Images/move.png","Images/move1.png");
  bath = loadAnimation("Images/bath1.png","Images/bath2.png");
}

function setup() {
  createCanvas(800,400);

  astronaut = createSprite(300,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  
  if(keyDown(UP_ARROW)){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",eat);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("space")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

 
  drawSprites();
}





