var moving_rect,fixed_rect,rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 50, 100);
  fixed_rect = createSprite(600, 200, 100, 50);

  rect1 = createSprite(100, 200, 50, 100);
  rect2 = createSprite(200, 200, 50, 100);
  rect3 = createSprite(300, 200, 50, 100);
  rect4 = createSprite(400, 200, 50, 100);


  moving_rect.shapeColor="red"
  fixed_rect.shapeColor="red"
  rect1.shapeColor="red"
  rect2.shapeColor="red"
  rect3.shapeColor="red"
  rect4.shapeColor="red"

}

function draw() {
  background(255,255,255);  

  moving_rect.y=World.mouseY;
  moving_rect.x=World.mouseX;
  
  
 
  if(isTouching(rect2,moving_rect)){
    moving_rect.shapeColor="green"
    rect2.shapeColor="green"
  }else{
    moving_rect.shapeColor="red"
    rect2.shapeColor="red"

  }





  drawSprites();
  
}

