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
            
           
            
            word.push(new nuevo(arrayTemp[index],random(50,750),random(-1000,200))); 
           
           
        }
        
        
        for (let index = 0; index < arrayTemp2.length; index++) {

            list.push(new nuevo(arrayTemp2[index],100+(index)*50,875,false)); 
            
           
           
        }
        
    }
  
}


function draw() {
    background(200);
    

 for (let index = 0; index < word.length; index++) {

  word[index].draw();
  word[index].llenar(0,0,0);
  word[index].mover();
    
 }

 fill(100);
 rect(0,850,800,50); 
encont();
comp();


 for (let index = 0; index < 5; index++) {
 
    list[index].draw();
    list[index].llenar(0,0,0);
    
    if(list[index].coger==true){
        list[index].chas();
        
        }
 } 



 
}

function comp () {
    
    if(pal1===pal2){
console.log("yass");
for (let index = 0; index < 5; index++) {
list[index].draw();
list[index].llenar(0,255,0);
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
    for (let index = 0; index < 5; index++) {
    if(this.mouseX<=list[index].posx+10&&this.mouseX>=list[index].posx-10&&this.mouseY<=list[index].posy+10&&this.mouseY>=list[index].posy-10){
      list[index].coger=true;
      pal1 = list[index].palabra 


          }
        }
}

function mouseReleased() {
    for (let index = 0; index < 5; index++) {
list[index].coger=false;
pal1 = undefined;

}
}

