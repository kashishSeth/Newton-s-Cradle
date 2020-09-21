
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    //body1=createSprite(180,350,80,20);

    bobObj1 = new Bob(380,350,30);
    bobObj2 = new Bob(410,350,30);
    bobObj3 = new Bob(440,350,30);
    bobObj4 = new Bob(470,350,30);
    bobObj5 = new Bob(500,350,30);
    roof = new Roof(440,200,180,20);
    Rope1 = new Rope(bobObj1.body,roof.body,-60,0);
    Rope2 = new Rope(bobObj2.body,roof.body,-30,0);
    Rope3 = new Rope(bobObj3.body,roof.body,0,0);
    Rope4 = new Rope(bobObj4.body,roof.body,30,0);
    Rope5 = new Rope(bobObj5.body,roof.body,60,0); 
    
    Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("White");

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof.display();
 
  drawSprites();
}


function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100,y:100});
    }  
}