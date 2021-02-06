class Ground{
    
        constructor(){
        
            var groundOptions={
                isStatic:true
            }
            this.body=Bodies.rectangle(600,600,1200,20,groundOptions);
            this.width=1200;
            this.height=20;
            World.add(world,this.body);
        }
        
           display(){
            var pos=this.body.position;
            push();
            rectMode(CENTER);
            strokeWeight(4);
            fill("black");
            rect(pos.x,pos.y,this.width,this.height);
            pop();
           }
        
        
        
        
            
        }
    
