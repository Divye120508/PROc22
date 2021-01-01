//Aliasing all the names
const Engine=Matter.Engine; ///create engine
const World=Matter.World; //led by engine which follow law of physics or narture
const Bodies=Matter.Bodies; //create objects in world that follow law of physics
var ground;
var ball;


function setup(){


 createCanvas(400,400);
 engine=Engine.create(); //created a engine 
 
 world= engine.world;// world that is lead by engine

var ground_options={


isStatic:true

}


 ground=Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);
 console.log(ground);
console.log(ground.position); 
console.log(ground.position.x);
console.log(ground.position.y);
var ballOptions={
restitution:.8
}
ball=Bodies.circle(300,100,28,ballOptions);
World.add(world,ball);
}


function draw(){

background(0);

 Engine.update(engine);


fill("white");
stroke("white");
line(200,0,200,400);
line(0,200,400,200);
fill("red");
rectMode(CENTER);
rect(200,200,50,50);
ellipseMode(RADIUS);
rect(ground.position.x,ground.position.y,400,20);
ellipse(ball.position.x,ball.position.y,28,28);
}