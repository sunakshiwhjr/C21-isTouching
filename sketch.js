var fixedRect, movingRect;

var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;


function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 300, 50, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200, 400, 100, 40);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(900, 100, 50,50);
  gameObject1.shapeColor = "Purple";
  gameObject2 = createSprite(900, 200 , 50,50);
  gameObject2.shapeColor = "Yellow";
  gameObject3 = createSprite(900, 300, 50,50);
  gameObject3.shapeColor = "White";
  gameObject4 = createSprite(900, 400, 50,50);
  gameObject4.shapeColor = "Orange";
  



}

function draw() {
  background(0);  
  
  //control
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log("Addition of the distance between 2 rect half of the width ",
  fixedRect.width/2 + movingRect.width/2 );

  console.log("Difference between the 2 rect x position : ",
  movingRect.x - fixedRect.x);
  

 if(isTouching(movingRect, gameObject2))
 {
     movingRect.shapeColor = "red";
     gameObject2.shapeColor = "red";
 }

 else{

      movingRect.shapeColor = "green";
      gameObject2.shapeColor = "yellow";

 }




  drawSprites();
}

//o1 and o2 represents the objects.
function isTouching(o1, o2)
{

  if(o1.x - o2.x < o1.width/2 + o2.width/2 &&
    o2.x - o1.x < o1.width/2 + o2.width/2 && 
    o1.y - o2.y < o1.height/2 + o2.height/2 &&
    o2.y - o1.y < o1.height/2 + o2.height/2)
  {
    
      return true;
  }
  else{

      return false;

  }

}


