class Cannon {

 constructor (x,y,width,height,angle){

    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;
    this.angle = angle;

    this.cannon_ing = loadImage ("/assets/canon.png");
    this.cannon_base = loadImage ("/assets/cannonBase.png");

 }

 display (){

  // console.log (this.angle);

    push ();

    imageMode(CENTER);
    image (this.cannon_ing,this.x,this.y,this.width,this.height)

    translate (this.x,this.y);   
    rotate(this.angle);
    
    pop ();

    if (keyIsDown(UP_ARROW)){
      this.angle -=1;
   }

   if(keyIsDown(DOWN_ARROW)){

      this.angle +=1;
   }

   image(this.cannon_base,23,36,200,200);
 }
    
  
}
