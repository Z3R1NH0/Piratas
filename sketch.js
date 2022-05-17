const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_ing;
var tower,tower_ing;
var canvas
var cannon,angle;

var bola_de_canhao;


function preload() {

bg_ing = loadImage ("./assets/lago_bg.gif");
tower_ing = loadImage ("./assets/tower.png");

}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle (120,360,160,310,options);
  World.add(world, tower);

  angle = 20;
  cannon = new Cannon (140,130,130,100,angle);

  bola_de_canhao = new Cannon_ball(cannon.x,cannon.y);


}

function draw() {
  image (bg_ing,0,0,1200,600);

  Engine.update(engine);

  cannon.display ();

  rect(ground.position.x, ground.position.y, width * 2, 1);
 
  push ();
  imageMode (CENTER);
  image (tower_ing,tower.position.x, tower.position.y, 160,310);
  pop ();

  bola_de_canhao.display ();
  
  push ();

  translate(cannon.x,cannon.y);

  pop ();
}

