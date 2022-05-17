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

        World.add(world,this.body);
    }

    kick () {

        var new_angle = cannon.angle;
        new_angle = new_angle*(3.14/180);
        
    }

    display () {
        var pos = this.body.position;

        push ();
        
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r);

        pop ();
    }

    


}