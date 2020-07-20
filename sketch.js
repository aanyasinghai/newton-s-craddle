const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var groundObject;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 50;

function setup() {
	createCanvas(1200,600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	groundObject = new Roof(width/2,150,600,20);

	bob1 = new Bob(500,500,50,"pink");
	bob2 = new Bob(550,500,50,"blue");
	bob3 = new Bob(600,500,50,"red");
	bob4 = new Bob(650,500,50,"yellow");
	bob5 = new Bob(700,500,50,"green");

	rope1 = new Rope(bob1.body,groundObject.body,-200,0);
	rope2 = new Rope(bob2.body,groundObject.body,-100,0);
	rope3 = new Rope(bob3.body,groundObject.body,-0,0);
	rope4 = new Rope(bob4.body,groundObject.body,-100,0);
	rope5 = new Rope(bob5.body,groundObject.body,-200,0);

	Engine.run(engine);
}           

function draw() {
  rectMode(CENTER);
  background(255);
  
  groundObject.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function KeyPressed(){
	if (KeyCode === UP_ARROW) {
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});
	}
}
