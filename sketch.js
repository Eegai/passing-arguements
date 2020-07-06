var fixedRect, movingRect,box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "grey";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1 = createSprite(600,100)
  box2 = createSprite(600,720)
  box1.shapeColor="red"
  box2.shapeColor="blue"

  box2.velocityY = -5;
  box1.velocityY = +5;
}




function draw() {
  background(0,0,0);  

  bounceoff(box1,box2);
  bounceoff(movingRect  ,  fixedRect)
  drawSprites();
}

