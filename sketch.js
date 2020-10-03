const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crumpledball, dustbin, ground;

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	
	groundSprite = createSprite(width/2, height-35, width,70);
	groundSprite.shapeColor=color("brown")

	dustbin = new Dustbin(1200, 400);
	crumpledball = new CrumpledBall(200, 600);

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, 50, 10 , {isStatic:true} );
	World.add(world, ground);

	
  
  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  crumpledball.display();
  dustbin.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(crumpledball.body, crumpledball.body.position, {x:85, y:-85})
	}
  }


