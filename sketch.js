const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var back;

var paperBall, floor, bin, bin2, bin3, slingshot, ball, enemy1, mouse;

var num = 0

var gamestate =  "launched";
// function preload(){
    // back = loadImage("sprites/school.png");
// }

function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;

    // bin = new Boxs(1000, 590, 150, 150);

    // paperBall = new Ball(100, 100);

    // bin2 = new Box(905, 585, 10, 150);

    // bin3 = new Box(1095, 585, 10, 150);

    // floor = new Ground(700, 690, 14000, 50);

    mouse = new Mouse(50, 650, 50 , 50);
    lava = new Lava(700, 670, 14000, 70);
    invi = new invis();
    floor = new Ground(700, 610, 1400, 35);
    ball = new Ball(50, 600, 55);
    enemy1 = new enemy();
    enemy2 = new enemy();
    enemy3 = new enemy();
    enemy4 = new enemy();
    enemy5 = new enemy();
    enemy6 = new enemy();
    enemy7 = new enemy();

    slingshot = new SlingShot(mouse.body, ball.body);


}

function draw() {
    background("black");
    // drawSprites();
    Engine.update(engine);
    lava.display();
    floor.display();
    ball.display();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();

    // slingshot.show();
    mouse.display();

    detectollision(ball, enemy1)
    detectollision(ball, enemy2)
    detectollision(ball, enemy3)
    detectollision(ball, enemy4)
    detectollision(ball, enemy5)
    detectollision(ball, enemy6)
    detectollision(ball, enemy7)
}
function mouseDragged(){
    if (gamestate== "on sling" ){
    Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
    if (gamestate == "launched"){
        slingshot.attach(ball.body)
        Body.setPosition(mouse.body, {x:mouseX, y:mouseY});
        gamestate = "on sling";
    }
}

function mouseReleased(){
    if (gamestate == "on sling")
    slingshot.fly();
    gamestate = "launched";
}





function detectollision(lstone,lmango){
  lmango.body.position
  lstone.body.position
  
  var distance=dist( lmango.body.position.x, lmango.body.position.y, lstone.body.position.x, lstone.body.position.y)

  	if(distance<=lmango.radius+lstone.radius)
    {
    Body.setStatic(lmango.body, false);
    Body.applyForce(lmango.body, lmango.body.position, {x:25, y:25});

    }

  }