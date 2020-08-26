
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

dustbin1 = new dustbin(500,630,20,100);
dustbin2 = new dustbin(585,670,150,20);
dustbin3 = new dustbin(660,630,20,100);
ground1 = new Ground (780,680,400,10);



	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display ();
  dustbin2.display ();
  dustbin3.display ();
  ground1.display () ;
  
  drawSprites();
 
}

function keypressed () {

  if (KeyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body.position,{x:85,y:-85});
  }
}



