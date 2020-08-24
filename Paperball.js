class Ball{
    constructor(x, y){
        var options = {
            isStatic:false, 
            restitution:0.4, 
            friction:3,
            density:2.2
        }
        var r = Math.round(50);
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        // this.image = loadImage("sprites/Untitled.png");
        World.add(world, this.body)
    }    
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    // imageMode(CENTER);    
    fill("lightblue");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    // image(this.image, pos.x, pos.y, this.radius, this.radius);

}
    
}
