class Stone{
    constructor(x,y,r){
        var option={density:1.2,
                    friction:1,
                isStatic:false}

        this.body=Bodies.circle(x,y,r,option);
        this.r=r;
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){

        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
       // rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0,this.r,this.r);
        pop();
    }
}



/*class Stone{
    
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.stone=Bodies.circle(this.x,this.y,this.r,option);
        this.image=loadImage("stone.png");
        World.add(world,this.stone);
        }

        display(){
            var pos=this.stone.position;
            push();
            translate(pos.x,pos.y);
           // rotate(this.mango.angle);
            imageMode(CENTER)
            ellipseMode(CENTER)
            image(this.image,0,0,this.r,this.r)
            pop();
        }
    }
*/