var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
 
  fixedrect = createSprite(400, 200, 50, 50);
 movingrect=createSprite(100, 200, 50, 50);
movingrect.velocityX = 1
fixedrect.velocityX = -1 
 fixedrect.shapeColor="green"
    movingrect.shapeColor="green"}

function draw() {
  background(0,0,0); 
  
   
 
bounceOff(fixedrect,movingrect);

   

  drawSprites();
}
function bounceOff( object1,object2){
    if(object1.x - movingrect.x <= object1.width/2 + movingrect.width/2 && 
        movingrect.x - object1.x <= object1.width/2 + movingrect.width/2 ){
          movingrect.velocityX = movingrect.velocityX * (-1)
          object1.velocityX = object1.velocityX * (-1)
        }
       if( movingrect.y - object1.y <= object1.height/2 + movingrect.height/2 &&
        object1.y - movingrect.y <= object1.height/2 + movingrect.height/2 ){
          movingrect.velocityY = movingrect.velocityY * (-1)
          object1.velocityY = object1.velocityY * (-1)
        } 
    }













