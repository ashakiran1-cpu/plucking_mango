class Chain{
    constructor(body1,pointB){
        var option={
            bodyA:body1,
            pointB:pointB,
            stiffness:1,
            lenght:10
        }
        this.chain=Constraint.create(option);
        this.pointB=pointB;
        this.bodyA=body1;
        World.add(world,this.chain);
    }

    attach(body1){
        this.chain.bodyA=body1;
    }

    fly(){
      
     this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){
        var posA= this.chain.bodyA.position;
       var posB=this.chain.pointB;
        strokeWeight(4);
        line( posA.x,posA.y,posB.x,posB.y);
        }
    }
    
    
    }
