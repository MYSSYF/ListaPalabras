class MyRect {
    constructor(posX,posY,tam){
        this.posX = posX;
        this.posY = posY;
        this.tam  = tam;
       this.dir = 0;
       
    }

    draw(){
        fill(255,0,0);
        rect(this.posX,this.posY,this.tam,this.tam);
       
    }

    move(){  
    switch (this.dir) {
        case 0:
            if(this.posX>=350&&this.posY<=0){
                this.dir = 1
                }
            this.posX+=10;

            break;
            case 1:
                if(this.posX>=350&&this.posY>=350){
                    this.dir = 2
                }
            this.posY+=10;

            break;  
            case 2:
                if(this.posY>=350&&this.posX<=0){
                    this.dir = 3
                }
            this.posX-=10;
    
            break;
            case 3:
                if(this.posX<=0&&this.posY<=0){
                    this.dir = 0
                }
            this.posY-=10;
        
            break;
    
        default:
            break;
    }

          
    }
    
}