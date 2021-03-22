class nuevo {

    constructor(palabra,posx,posy,coger){
this.posx =posx;
this.posy =posy;
this.palabra =palabra;
this.coger = coger;


       
    }

    draw(){
    
        textAlign(CENTER);
        textSize(18);
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

llenar(r,g,b){
    fill(r,g,b)
}

          
    }
    
