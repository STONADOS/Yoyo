class invis{
    constructor(){
        var options = {
            isStatic:true,
            friction:3,
            density:4.2
        }
        this.body = Bodies.rectangle(700, 618, 14000, 5, options);
        this.width = 14000;
        this.height = 25;
        World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pox.x, pos.y, this.width, this.height);
}
}