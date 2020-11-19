class Mango{
    
    constructor(x,y,r){
        var option={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.mango=Bodies.circle(this.x,this.y,this.r,option);
        this.image=loadImage("mango.png");
        World.add(world,this.mango);
        }

        display(){
            var pos=this.mango.position;
            push();
            translate(pos.x,pos.y);
            rotate(this.mango.angle);
            imageMode(CENTER)
            ellipseMode(CENTER)
            image(this.image,0,0,this.r,this.r)
            pop();
        }
    }
