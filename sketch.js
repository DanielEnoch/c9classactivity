var box;
function setup() {
  createCanvas(400,400);
box=createSprite(135,135,15,20);
box.shapeColor="peach";


}

function draw() 
{
    background(30);
if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+2.0;

}
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-2.0;
}
if(keyIsDown(UP_ARROW)){
  box.position.y=box.position.y-2.0;
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+2.0;
}
drawSprites();
}



