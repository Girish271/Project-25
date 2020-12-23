class Ball {
    constructor(x, y,radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius
        World.add(world, this.body);
        this.paperImage=loadImage("sprites/paper.jpg")
      }
display() {
    var pos1 =this.body.position;
    translate(pos1.x,pos1.y)
    ellipseMode(CENTER);
    fill("white")
    ellipse(0,0, this.radius);
    imageMode(CENTER)
    image(this.paperImage,0,0,60,60)
   
   }
}