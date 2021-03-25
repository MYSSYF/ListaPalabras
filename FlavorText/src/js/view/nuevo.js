class nuevo {

    constructor(palabra,posx,posy,coger,r,g,b,mat){
this.posx =posx;
this.posy =posy;
this.palabra =palabra;
this.coger = coger;
this.mat = mat;
this.r = r
this.g = g
this.b = b


       
    }

    draw(){
    
        textAlign(CENTER);
        textSize(18);
        fill(this.r,this.g, this.b)
       text(this.palabra,this.posx,this.posy);
    }

mover(){
    this.posy+= random(1,6);
    if(this.posy>=930){
this.posy = 10;
    }
}
chas(){

    this.posx = mouseX;
    this.posy = mouseY;
}



          
    }
    
