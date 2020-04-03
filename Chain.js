class Chain {
    constructor(A, B){
        var options = {
            bodyA: A,
            bodyB: B,
            length: 15,
            stiffness: 0.075
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        strokeWeight(5);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}