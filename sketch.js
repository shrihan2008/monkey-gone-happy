var survival=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
function preload()
{
  monkey_running =                            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png"); 
}



function setup()
{
  createCanvas(1040,700)
  monkey=createSprite(100,400)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.25
  
  ground=createSprite(500,700,5000,40)
  ground.velocityX=-5

  FoodGroup=new Group()
  obstacleGroup=new Group()
}


function draw()
{
  background("green") 
  
  if(ground.x<0)
  {
    ground.x=ground.width/2
  }
  if(monkey.x>1000)
  {
    monkey.x=monkey.width/2
  }
  if(keyDown("space")&&monkey.y<700)
  {    
    monkey.velocityY=-5
  }
  
  monkey.velocityY=monkey.velocityY+0.12
  if(monkey.isTouching(ground))
  {
    monkey.collide(ground)    
  }
  
 
   if(keyDown("a"))
   {
      monkey.velocityX=2    
   }
   
  bananaMaker();
  obstacles();
  if(monkey.isTouching(FoodGroup))
  {
    survival=survival+1
    FoodGroup.destroyEach()
    
  }
  
  if(monkey.isTouching(obstacleGroup))
  {
    
     monkey.velocityX=0
     banana.x=Math.round(random(111100,1111111100))
    banana.y=Math.round(random(6594030221100,3234454400))
      obstacle.x=Math.round(random(111100,1111111100))
    obstacle.y=Math.round(random(6594030221100,3234454400))
    text("Game Over",600,300)
    survival=0
  }   
  
  text("Survival  " +  survival,300,300)
  drawSprites(); 
}

function bananaMaker()
{  
  if (World.frameCount % 60 == 0)
  {
    
    banana = createSprite(100,400,10,40);
    banana.addImage("bun",bananaImage)
    banana.x=Math.round(random(100,700))
    banana.y=Math.round(random(400,700))
    banana.velocityY=3
    banana.lifetime=100
    banana.scale=0.25
    FoodGroup.add(banana)   
  }
}
function obstacles()
{
  if (World.frameCount % 150 == 0)
  {
    obstacle = createSprite(700,650,10,40);
    obstacle.velocityX = -4   
    obstacle.addImage("ob", obstacleImage)  
    obstacle.lifetime=300
    obstacle.scale=0.25
    obstacleGroup.add(obstacle)
  }
                        
}




