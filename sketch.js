const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object, ground;
var box1; 
var ball;
var poly; 

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (600, 390, 1200, 10);
  box1 = new Box (700, 320, 70, 70); 
  box2 = new Box (920, 320, 70, 70);
  pig1 = new Pig (810, 350);
  log1 = new Log(810, 260, 300, PI/2);
  box3 = new Box(700,250, 70, 70);
  box4 = new Box(920,250, 70, 70);
  pig2 = new Pig(810, 235);
  log2 = new Log(810, 150, 300, PI/2);
  bird = new Bird(100,100);
  box5 = new Box(810, 130, 70, 70);
  log3 = new Log(600,80, 150, PI/4);

}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display(); 
  box1.display();
  box2.display(); 
  console.log("farhana");
  pig1.display();
  console.log("computer");
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display(); 
  bird.display();
  box5.display();
  log3.display();
}