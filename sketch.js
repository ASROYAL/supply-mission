var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxbase,boxside;
var packageBody,ground
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
	engine = Engine.create();
	world = engine.world;




	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
boxposition=width/2-100
boxY=610
	boxbase=createSprite(boxposition+100,boxY+40,200,20)
	boxbase.shapeColor=color(255,0,0)
	boxbaseBody=Bodies.rectangle(boxposition+100,boxY+45-20,200,20,{isStatic:true})
World.add(world,boxbaseBody)
boxposition=width/2-50
boxY=590
boxside=createSprite(boxposition+150,boxY+20,20,100)
	boxside.shapeColor=color(255,0,0)
	boxsideBody=Bodies.rectangle(boxposition+100,boxY+45-20,200,20,{isStatic:true})

	boxposition=width/2-50
	boxY=590
	boxside=createSprite(boxposition-50,boxY+20,20,100)
	boxside.shapeColor=color(255,0,0)
	boxsideBody=Bodies.rectangle(boxposition+100,boxY+45-20,200,20,{isStatic:true})


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y=packageBody.position.y
 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode ==40) {

	Matter.Body.setStatic(packageBody,false)
    
  }
}


