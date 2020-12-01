class Bird {
    constructor (x,y){
  var bd_options={
      restitution:1.0,
      density:0.5
  }
this.body = Bodies.rectangle(x,y,60,60, bd_options);
this.wdith= 60;
this.height= 60; 
World.add(world, this.body);
    }
display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y=  mouseY;
    var angle = this.body.angle;
    push ();
    translate(pos.x, pos.y);
    rotate (angle);
  
    fill ("red");
    rectMode(CENTER);
    rect(0, 0, this.wdith, this.height);
    
    pop();
  
}
}