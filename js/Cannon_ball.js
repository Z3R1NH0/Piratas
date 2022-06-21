class Cannon_ball {

    constructor (x,y,r) {

        var options = {
            isStatic: true
        }

        this.r = 30;
        //this.x = x;
        //this.y = y;

        this.body = Bodies.circle (x,y,this.r,options);
        this.image = loadImage ("./assets/cannonball.png");

        this.trajetory = [];

        World.add(world,this.body);
    }

    kick () {

        var new_angle = cannon.angle - 28;
        new_angle = new_angle*(3.14/180);
        
        var velocity = p5.Vector.fromAngle(new_angle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)});
        

    }

    remove(index){
        Matter.Body.setVelocity(this.body,{
            x:0,y:0
        })
        setTimeout(()=>{Matter.World.remove(world,this.body);delete balls[index]},1000);
    }

    display () {
        var pos = this.body.position;

        //console.log (this.angle);

        push ();
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r);

        pop ();

        if (this.body.velocity.x > 0 && pos.x > 10){

            var position_1 = [pos.x,pos.y];
            this.trajetory.push(position_1);

        }

        for (var i = 0; i < this.trajetory.length; i++){
            
            image(this.image,this.trajetory[i][0],this.trajetory[i][1],5,5);

        }
    }



    


}