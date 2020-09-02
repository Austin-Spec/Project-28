const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var ground1;
var fruit1,fruit2,fruit3,fruit4,fruit5
var chain1;

function preload()
{
	boy1 = loadImage("boy.png")

}

function setup() {
	createCanvas(800, 700);

	person = createSprite(160,570,10,10)
	person.addImage("p",boy1)
	person.scale =0.11

	

	engine = Engine.create();
	world = engine.world;

	ball = new rock(95,505,60)
	ground1 = new floor(400,650,2400,30)
	theMango = new tree(610,640)
	fruit1 = new fruit(500,250,30)
	fruit2 = new fruit(550,150,30)
	fruit3 = new fruit(600,250,30)
	fruit4 = new fruit(650,150,30)
	fruit5 = new fruit(700,250,30)

	chain1 = new rope(ball.body,{x:95,y:505})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  textSize(25);
  text("Press Space to get a second Chance to Play.",50 ,50);

  ball.display();
  ground1.display();
  theMango.display();
  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  chain1.display();


  detectollision(ball,fruit1);
  detectollision(ball,fruit2);
  detectollision(ball,fruit3);
  detectollision(ball,fruit4);
  detectollision(ball,fruit5);


  drawSprites();
 
}

function mouseDragged () {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    chain1.fly()
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	console.log(distance)
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false)
		
	}
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(ball.body, {x:95, y:505}) 
	  chain1.attach(ball.body);
	}
  }