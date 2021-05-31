var tower,towerImg;
var ghost,ghostImg;
var railing,railingImg;
var door,doorImg;
var gamestate = "PLAY";
var doorGroup,RailingGroup;
var invisiBlock,invisiGroup;

function preload(){
 
towerImg = loadImage("tower.png");  
ghostImg = loadImage("ghost-jumping.png");
railingImg = loadImage("climber.png");
doorImg = loadImage("door.png");
}
              
function setup(){
createCanvas(600,600);

tower = createSprite(300,300);
tower.addImage(towerImg);
tower.velocityY = 2;
  
ghost = createSprite(300,300);
ghost.addImage(ghostImg);  
ghost.scale = 0.3;

doorGroup = new Group(); 
RailingGroup = new Group();
invisiGroup = new Group();
}

function draw(){
background("black");  

if(gamestate === "PLAY"){
   
  
  
if(tower.y > 500){
   tower.y = 300;
   }

if(keyDown("space")){
   
   ghost.velocityY = -10;
   
}

ghost.velocityY = ghost.velocityY + 0.8;  
 
if(keyDown("left_arrow")){ ghost.x = ghost.x - 3; } if(keyDown("right_arrow")){ ghost.x = ghost.x + 3; }  
 
 if(ghost.y > 600 || ghost.y < 0 || ghost.isTouching(invisiGroup)){
   
   gamestate = "END";
   
 }  
 
  if(ghost.isTouching(RailingGroup)){
     
    ghost.velocityY = 0;
     }
    
  
spawnDoors();
drawSprites();
}
  
if(gamestate === "END"){
  textSize(30); 
  text("GAME OVER",300,300);
  
  
}  
}

function spawnDoors(){

if(frameCount%200 === 0 ){
 
  door = createSprite(200,-50);  
  door.addImage(doorImg);
  door.x = random(100,400);
  door.velocityY = 2;
  
  invisiBlock = createSprite(200,15,50,5);
  invisiBlock.x = door.x;
  invisiBlock.velocityY = 2;
  
  railing = createSprite(200,10);
  railing.velocityY = 2;    
  railing.addImage(railingImg);
  railing.x = door.x;

  doorGroup.add(door);
  invisiGroup.add(invisiBlock);
  RailingGroup.add(railing);
}  
  

 
}