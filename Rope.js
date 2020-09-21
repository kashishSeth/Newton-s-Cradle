class Rope{
  
  constructor(body1,body2,offsetX,offsetY)
  {
    this.offsetX=offsetX
    this.offsetY=offsetY 
    var Rope_Options ={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.offsetX, y:this.offsetY},
       
    }
    this.Rope=Constraint.create(Rope_Options);
    World.add(world,this.Rope);
    console.log(this.Rope);
  }
  display()
  {
   var pointA=this.Rope.bodyA.position;
   var pointB=this.Rope.bodyB.position;

   strokeWeight(2);
   stroke("black");
   var Anchor1X=pointA.x;
   var Anchor1Y=pointA.y;

   var Anchor2X=pointB.x+this.offsetX;
   var Anchor2Y=pointB.y+this.offsetY;

   line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
  }
}