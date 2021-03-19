class Pig
{
    constructor(x,y){
   this.body=Bodies.rectangle(x,y,50,50);
   this.w=50;
   this.h=50;
   World.add(myworld,this.body);

    }

    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("red");
        strokeWeight(4);
        rect(0,0,this.w,this.h);
        pop();
    }
}