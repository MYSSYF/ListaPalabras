let texts = [];
let word = [];
let list = [];
let pal1;
let pal2;




function preload() {
    texts = loadStrings('./asset/text.txt');

}

function setup() {
    createCanvas(800, 900);
 




    for (let index = 0; index < texts.length; index++) {
         arrayTemp = texts[index].split(" ");
         arrayTemp2 = texts[index].split(" ");
    
      
        for (let index = 0; index < arrayTemp.length; index++) {
            
           
            
            word.push(new nuevo(arrayTemp[index],random(50,750),random(-1000,200),0,0,0,false)); 
           
           
        }
        
        
        for (let index = 0; index < arrayTemp2.length; index++) {

            list.push(new nuevo(arrayTemp2[index],100+index*100,875,false,0,0,0,false)); 
            
           
           
        }
        
    }
  
}


function draw() {
    background(200);
    

 for (let index = 0; index < word.length; index++) {
    fill(0);
  word[index].draw(0,0,0);
 
  word[index].mover();
    
 }

 fill(100);
 rect(0,850,800,50); 
encont();




 for (let index = 0; index < 4; index++) {

    list[index].draw(0,0,0);
    
    
    
    if(list[index].coger==true){
        list[index].chas();
        if(list[index].mat==true){
        list[index].g=250;
        
        }
        if(word[index].mat==true){
            word[index].g=250;
            
            }
        }

        
        
            
            
 } 

 comp();
 

 
}

function comp () {
    
    if(pal1===pal2){

for (let index = 0; index < list.length; index++) {
list[index].mat=true;



        }
for (let index = 0; index < word.length; index++) {
            word[index].mat=true;
            
            
            
                    }
    }
}



function encont () {
    pal2 = "pal";
    for (let index = 0; index < word.length; index++) {
    if(this.mouseX<=word[index].posx+10&&this.mouseX>=word[index].posx-10&&this.mouseY<=word[index].posy+10&&this.mouseY>=word[index].posy-10){
pal2 = word[index].palabra
    }
}
}



function mousePressed() {
    for (let index = 0; index < 4; index++) {
    if(this.mouseX<=list[index].posx+10&&this.mouseX>=list[index].posx-10&&this.mouseY<=list[index].posy+10&&this.mouseY>=list[index].posy-10){
      list[index].coger=true;
      pal1 = list[index].palabra 


          }
        }
}

function mouseReleased() {
    for (let index = 0; index < 4; index++) {
list[index].coger=false;
list[index].mat= false;
word[index].mat = false;
pal1 = undefined;
list[index].posx =100+index*100
list[index].posy=875

}
}

