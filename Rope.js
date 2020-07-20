class Rope{
    constructor(bodyA,bodyB,offSetX,offSetY){

        this.offSetX = offSetX;
        this.offSetY = offSetY;

        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 200,
            stiffness: 0.4,
            pointB : {x:this.offSetX,y:this.offSetY}
        }

        this.rope = Constraint.create(option);
        World.add(world,this.rope);
    }

    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        push();
        strokeWeight(4);
        line(posA.x,posA.y,posB.x+this.offSetX,posB +this.offSetY);
        pop();
    }
}