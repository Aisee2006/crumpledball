const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper,manimg,man;
function preload()
{
 manimg=loadImage("clean.png");	
}

function setup() {
	createCanvas(1200,500);
    background(255);
	engine = Engine.create();
	world = engine.world;

    man=createSprite(1100,290,10,10);
	man.addImage(manimg);
	man.scale=0.7;

	//Create the Bodies Here.
     ground = new Ground(600,400,1200,20);
	 dustbin1 = new Dustbin(880,360,20,70);
	 dustbin2 = new Dustbin(940,385,100,20);
	 dustbin3 = new Dustbin(980,360,20,70);
	 paper = new Paper(100,375,40);

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0,0,255);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  drawSprites();
  text("THROW PAPER INTO BIN BY PRESSING UP ARROW:",100,100);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:185,y:-185});
	}
}



