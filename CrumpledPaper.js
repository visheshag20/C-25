class CrumpledPaper{
        constructor(x,y,r){
             var options = {
                 //isStatic:false,
                 restitution:0,
                 friction:0,
                 density:1.2
             }
             this.x = x;
             this.y = y;
             this.r = r;
             this.image = loadImage("paper.png");
             this.body = Bodies.circle(250,540,20,options)
             World.add(world,this.body)
            }
             display(){
              var pos = this.body.position
              
              rotate(this.body.angle)
              imageMode(CENTER);
              fill(255,255,255)
              image(this.image,pos.x,pos.y,33,33);
              
             }
}
