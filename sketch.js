const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_ing;
var tower,tower_ing;
var canvas;
var cannon,angle;

var bola_de_canhao;

var balt;

var bolts = [];

var balls = [];


//matriz/array

/*var empresa = ["funcionario_1","funcionario_2","funcionario_3"];

var setores = [["setor_1 " + 1 + "R$","setor_2 " + 2 + "R$"],["setor_3 " + 300 + "R$","setor_4 " + 400 + "R$"]];

//acessando itens no array
console.log (empresa[2]);
console.log (setores[0],[1]);
console.log (empresa);

//adicionando itens no array

empresa.push("estagiario");

console.log (empresa, "Contratado :D")

empresa.pop(); 
console.log (empresa, "Demitido" );

empresa.pop([0]);

console.log (empresa);*/

function preload() {

bg_ing = loadImage ("./assets/bg_misterio.gif");
tower_ing = loadImage ("./assets/tower.png");

}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 70;

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle (120,360,160,310,options);
  World.add(world, tower);

  cannon = new Cannon (140,130,130,100,angle);

  //bola_de_canhao = new Cannon_ball(cannon.x,cannon.y,cannon.angle);

  balt = new Bolt (width - 250, height -100,200,200,-80);
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
  
  push ();

  translate(cannon.x,cannon.y);

  pop ();

  for (var i = 0; i < balls.length; i++){
    showBalls(balls[i],i);
    titanic(i);
  }

  balt.display();
  Matter.Body.setVelocity(balt.body,{x:-0.3,y:0});
}

function keyReleased(){
  if (keyCode == 32){

    balls[balls.length - 1].kick();
    
    //balls = [];
  }
}

function keyPressed(){

  if(keyCode == 32){
    var bola_de_canhao =  new Cannon_ball(cannon.x,cannon.y);
    balls.push(bola_de_canhao);
    //console.log(balls);
  }

}

function showBalls(ball,index){
  if (ball){

    ball.display(); 
  }

  if(ball.position.x >= width || ball.body.position.y >= height -50){
    ball.remove(index)
  }
}

//colisão
function titanic (){

  for (var i=0;i<bolts.lenght;i++){

    if (balls[index]!== undefined && bolts[i]!== undefined){

      var colisao = Matter.SAT.Collides(balls[index].body,bolts[i].body);

      if(colisao.collided){

        bolts[i].remove(i);
        Matter.World.remove(world,balls[index].body);
        delete balls[index];

      }

    }

  }

}




