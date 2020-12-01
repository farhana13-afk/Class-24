class Log{
    constructor(x,y, height, angle){
var l_options={
    restitution: 1.0,
    density:0.5,
    friction: 0.8
}
this.body= Bodies.rectangle( x,y, 20, height, l_options);
this.width = 20;
this.height= height;
World.add(world, this.body);
Matter.Body.setAngle (this.body, angle);
    }
    display(){
     var pos = this.body.position
     var angle = this.body.angle

     push ();
     translate(pos.x, pos.y);
     rotate (angle);

     fill ("brown");
     rectMode(CENTER);
     rect(0, 0, this.width, this.height);
    pop ();

    }
}