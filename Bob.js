class Bob {
    constructor(x,y,r,color){
        var options={
            isStatic:false,
            friction:0,
            density:1,
            restitution:1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.color=color;
        this.body=Bodies.circle(this.x,this.y,this.r/2)
        World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    
}