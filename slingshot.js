class SlingShot {
    constructor(body1, body) {
      const options = {
        bodyA: body1 ,
        bodyB: body,
        stiffness: 0.07,
        length:10
      }
      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }
  
    fly() {
  
      this.sling.bodyB = null;
    }
  
    show() {
      if (this.sling.bodyB) {
        stroke(0);
        strokeWeight(4);
        const posA = this.sling.pointA.position;
        const posB = this.sling.bodyB.position;
        line(posA, posA, posB.x, posB.y);
      }
    }
  
    
    attach(body) {
      this.sling.bodyB = body;
    }
  }