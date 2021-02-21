var PLAY=1;
var END=0;
var gameState=1;
var fruit;
var enemy;
var monster;
var knife;
var score;
var gameOverImg;
var gameOver;
var score;
var gameoverSound;
var knifeSound;

function preload(){
  knifeImage=loadImage("sword.png");
 fruit1=loadImage("fruit1.png");
 fruit2=loadImage("fruit2.png");
 fruit3=loadImage("fruit3.png");
 fruit4=loadImage("fruit4.png");
 gameOverImg=loadImage("gameover.png"); 
 monsterImage=loadImage("alien1.png");
 knifeSound=loadSound("knifeSwooshSound.mp3");
 gameoverSound=loadSound("gameover.mp3");  
}
function setup(){
  createCanvas (600,600);
  knife=createSprite(200,200,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.7
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();
 
 gameOver=createSprite(300,100);
  gameOver.addImage(gameOverImg);
  score=0;
}
function draw(){
background("lightblue");
 
  text("Score: "+ score, 500,50);
  if(gameState===PLAY){
 gameOver.visible=false;
 fruits();
 enemy();
 knife.y = World.mouseY;
 knife.x = World.mouseX;
    
  if(fruitGroup.isTouching(knife)){
   fruitGroup.destroyEach();
   score=score+1;
    knifeSound.play();
}
 else
{
   if(enemyGroup.isTouching(knife)){
 fruitGroup.destroyEach();
 enemyGroup.destroyEach();
 gameState=END;
 fruits.velocityX=0;
 enemy.velocityX=0;
 gameOver.visible=true;
   
 knife.x=200;
 knife.y=200;
  gameoverSound.play();
}
}    
}

drawSprites();
}

function fruits(){
 if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
   fruit.scale=0.2;
   r= Math.round(random(1,4));
   
  if(r==1){
  fruit.addImage(fruit1); 
  } else if(r==2){
    fruit.addImage(fruit2); 
  } else if(r==3){
    fruit.addImage(fruit3); 
  } else{
    fruit.addImage(fruit4);
  }
   fruit.y= Math.round(random(50,340));
   
   fruit.velocityX=-7;
   fruit.setLifetime=100;
   fruitGroup.add(fruit);
 } 
  }

function enemy(){
  if(World.frameCount%200===0) {
  monster=createSprite(400,200,20,20);
  monster.addImage(monsterImage);
  monster.Y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  enemyGroup.add(monster);
}
  }