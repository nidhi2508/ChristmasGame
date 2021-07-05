var bgImg;
var santa, santaImg;
var food, foodImg, foodEmptyImg;
var gift, giftImg;
var children, childrenImg;
var gameState =  "start";

function preload(){
  bgImg = loadImage("images/bgImg.jpg");
  santaImg = loadImage("images/santa.png");
  childrenImg = loadImage("images/children.png");
  foodImg = loadAnimation("images/food.png");
  //foodEmptyImg = loadAnimation("images/emptyFood.jpg");
  giftImg = loadImage("images/gifts.png");
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  food = createSprite(width/2-80, height/2+30, 50, 50);
  food.addAnimation("food",foodImg);
  //food.addAnimation("emptyFood",foodEmptyImg);
  food.scale = 0.1;

  gift = new Gift(width/2+400, height/2+200, giftImg);

  children = createSprite(width, height/2+200, 50, 50);
  children.addImage(childrenImg);
  children.scale = 0.2;
  children.visible = false; 
  
  santa = createSprite(width/2+150, 3*height/4, 50, 50);
  santa.addImage(santaImg);
  santa.visible = false;
  santa.scale = 0.1;
  
}

function draw() {
  background(bgImg);  
  //console.log(santa.y);
  if(santa.y < height-50 && gameState === "santaGone"){
    santa.visible = false; 
    children.visible = true;
    children.velocityX = -3; 
  }

  if(children.x <= 3*width/4){
    children.velocityX = 0;
  }
  
  drawSprites();
}

function keyPressed(){
  if(keyCode === DOWN_ARROW && gameState === "start"){
    santa.visible = true;
    gameState = "santa"
  } 
  
  if(gameState === "santa"){
    if(keyCode === LEFT_ARROW){
      santa.x -= 20;
    }
    
    if(keyCode === RIGHT_ARROW){
      santa.x += 20;
    }
    
    if(keyCode === UP_ARROW){
      santa.velocityY = -5;
      gameState = "santaGone"; 
    }
    
    if(keyCode === 32){
      console.log("testing ---");
      food.visible = false;
     //food.changeAnimation("emptyFood",foodEmptyImg);
      gift.sprite.visible = true;
    }
  }   
}