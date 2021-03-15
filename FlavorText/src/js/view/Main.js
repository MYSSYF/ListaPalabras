let texts = [];
let word = [];


function preload() {
    texts = loadStrings('./asset/text.txt');

}

function setup() {
    createCanvas(600, 800);



    for (let index = 0; index < texts.length; index++) {
         arrayTemp = texts[index].split(" ");
    

        for (let index = 0; index < arrayTemp.length; index++) {

            word.push(new nuevo(arrayTemp[index],random(100,500),random(100,500))); 
           
         
        }
    }


    
}





function draw() {
    background(200);
 for (let index = 0; index < word.length; index++) {
  word[index].draw();
     
 }
    


}