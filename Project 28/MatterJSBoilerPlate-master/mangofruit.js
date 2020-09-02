class fruit{
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.body = Matter.Bodies.circle(x, y, radius, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image, 0, 0, this.radius*2,this.radius*2);
        pop();
      }
}