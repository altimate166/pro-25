class Paper{
    constructor(x,y,r){
        var options ={
        isStatic:false,
        restitution:0.3,
        friction:100,
        density:1.2
        }
        this.image = loadImage("paper.png")
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(x, y,r, options)
        World.add(world,this.body)
    }
    display()
    {
    var paperpos=this.body.position;
    push()
    translate(paperpos.x,paperpos.y)
    rectMode(CENTER)
    fill(255,0,255)
    imageMode(CENTER)
    image(this.image,0,0,33,33)
   pop()
    }
}