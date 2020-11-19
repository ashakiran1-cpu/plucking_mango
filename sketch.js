
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render=Matter.Render;

var world,engine;

var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var chain1;

function preload()
{
	boy=loadImage("boy.png");
	tree=loadImage("tree.png");
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground= Bodies.rectangle(400,495,800,30,{isStatic:true});
	World.add(world,ground);
	
	mango1=new Mango(510,210,40);
	mango2=new Mango(580,210,40);
	mango3=new Mango(510,300,35);
	mango4=new Mango(545,250,30);
	mango5=new Mango(570,330,40);
	mango6=new Mango(600,300,20);
	mango7=new Mango(510,320,40);

	stone=new Stone(110,350,50);
	chain1= new Chain(stone.body,{x:100,y:350});
//	launch =new Chain (stone.body,{x:200,y:300})


	var render = Render.create(
	{
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	  Render.run(render)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
 
  fill("green");
  rect(ground.position.x,ground.position.y,800,30);
  imageMode(CENTER)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,430,250,250);
 	image(tree,600,350,400,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();
  chain1.display();

  detectcoll(mango1);
  /*detectcoll(stone,mango2);
  detectcoll(stone,mango3);
  detectcoll(stone,mango4);
  detectcoll(stone,mango5);
  detectcoll(stone,mango6);
  detectcoll(stone,mango7);
  //detectcoll(stone.body,mango2);*/

 
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain1.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:350})
		chain1.attach(stone.body);
	}
}

/*function detectcoll(lstone,lmango){
	

	//mangoBodyPosition=lmango.body.position;
  //	stoneBodyPosition=lstone.body.position;
  
  	 var distance=dist(lstone.body.position.x, lstone.body.position.y, lmango.body.position.x, lmango.body.position.y)
     console.log(distance)
 	 console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
}    */
function detectcoll(mango){
	var stonePosition=stone.body.position;
	var mangoPosition=mango.body.position;

	if(stonePosition.x-mangoPosition.x<stone.width+mango.width&&
		mangoPosition.x-stonePosition.x<stone.width+mango.width&&
		stonePosition.y-mangoPosition.y<stone.width+mango.width&&
		mangoPosition.y-stonePosition.y<stone.width+mango.width) {

		Matter.Body.setStatic(mango.body,false);}
		
	}                                                                                                      