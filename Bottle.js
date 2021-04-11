class Bottle{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.5,
            friction:1,
            density:0.8
        }
        this.image = loadImage("images/bottle.png");
        this.body = Bodies.rectangle(x,y,80,100,options);
        this.width = 80;
        this.height = 100;
        World.add(world,this.body);
    }
    display(){
        var p = this.body.position;
        push();
        translate(p.x,p.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}