class Box
{
    constructor(x,y,w,h){
        var options={
            friction:1,
            density:1.5,restitution:0.8
        }
   this.body=Bodies.rectangle(x,y,w,h,options);
   this.w=w;
   this.h=h;
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
        stroke("green");
        strokeWeight(4);
        rect(0,0,this.w,this.h);
        pop();
    }
}