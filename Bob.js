class Bob{

    constructor(x,y,r){
        var Bob_Options ={
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.9
        }
        
        this.r=r
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y,this.r/2,Bob_Options);
        World.add(world, this.body);
        }
        
        display(){
            var pos = this.body.position
            //var angle = this.body.angle
       
          
        push()        
        translate(pos.x,pos.y)
        //rotate(angle)
        ellipseMode(CENTER);
        //strokeWeight(3);
        //stroke("Black")
        fill("Grey");
        ellipse(0,0,this.r,this.r);
        pop()    
        }

}
