class Bolt {
    constructor(x,y,width,height,boltpose){

     this.body = Bodies.rectangle(x,y,width,height);
     this.width = width;
     this.height = height;
     this.image = loadImage("/assets/boat.png");
     this.boltPosition = boltpose;
     World.add(world,this.body);
    }   

    remove (index){

        setTimeout(()=>{

         Matter.Word.remove(world,bolts[index].body);

        },2000);

    }


    display(){

     var angle_1 = this.body.angle;
     var jojo = this.body.position

     push ();

     translate(jojo.x,jojo.y);
     imageMode(CENTER);
     image(this.image,0,this.boltPosition,this.width,this.height);

     pop ();

    }
}