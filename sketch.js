const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var engine,world;

var bottle1;
var ball;
var grounding;
var left;
var bottom;
var topBorder;
var left;
var stand;
function preload(){
    grounding = loadImage("images/background.jpg");
}

function setup() {
 createCanvas(windowWidth-50,windowHeight-200);

engine = Engine.create();
world = engine.world;

bottom = new Border(width/2-10,height-100,width-300,20);
left = new Border(width/12,height/2,20,height-180);
topBorder = new Border(width/2-10,100,width-300,20);

bottle = new Bottle(200,200);

stand = new Border(width-180,height/2+50,80,10);


ball = new Ball(width-180,height/2);


var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1400,
	  height: 600,
	  wireframes: false
	}
  });

Render.run(render);
}

function draw() {
 background(0); 

Engine.update(engine);
imageMode(CENTER);
image(grounding,width/2,height/2,width-300,height-180);
bottom.display();
topBorder.display();
left.display();
bottle.display();

ball.display();
bottom.display();


 drawSprites();

}
function keyPressed() {
	if (keyCode === LEFT_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:-130,y:-145});

  
	}
}