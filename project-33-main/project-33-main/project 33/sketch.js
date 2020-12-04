var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var divisions = [];
//var particles = [];
var plinkos = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
 
  strokeWeight(4);
  fill("white");
  textSize(40);
  text("score"+score,20,30);
  textSize(30);
  text("500",10,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
  if(particle!= null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300 && particle.body.position.y>0){
        score = score+500;
        particle = null
        if(turn>=5) gameState = "end";
      }
    
     else if(particle.body.position.x<510 && particle.body.position.x>300){
        score = score+100;
        particle = null
        if(turn>=5) gameState = "end";
      }
    
     else if(particle.body.position.x<800 && particle.body.position.x>510){
        score = score+200;
        particle = null
        if(turn>=5) gameState = "end";
      }
    }
  }
  if(gameState === "end"){
    strokeWeight(4);
  fill("white");
  textSize(40);
  text("game over",350,30);
  }
  // mousePressed();
}
function mousePressed()
{
  if(gameState === "play"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}