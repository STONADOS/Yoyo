class enemy{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(random(30, 1400), random(30, 600), 40, options);
        this.radius = 40;
        World.add(world, this.body)
    }
display(){
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    ellipseMode(CENTER);
    fill("red");
    ellipse(0, 0, this.radius);
    pop()

}
}