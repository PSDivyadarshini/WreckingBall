class Box{
    constructor(x,y,width,height){

        var option={
           restitution:0.8,
           friction:1.0,
           density:0.04
        }

        this.body= Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("brown");
        rect(0,0,this.width,this.height); 
        pop();
    }

}