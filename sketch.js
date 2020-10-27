var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var brk1
var brk2
var brk3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	brk1=createSprite(310,640,10,50)
	brk1.shapeColor=color(255,0,0)

	brk2=createSprite(370,670,130,10)
	brk2.shapeColor=color(255,0,0)

	
	brk3=createSprite(430,640,10,50)
	brk3.shapeColor=color(255,0,0)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {friction:0.5,isStatic:true,restitution:1.0});
	World.add(world, packageBody);
	World.add(world,helicopterSprite);
	World.add(world,brk1);
	World.add(world,brk2);
	
	
 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {	Matter.Body.setStatic(packageBody,false);
	packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  }
}



