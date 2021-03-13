
let texts = [];
let word = [];
let posx = [];
let posy = [];

function preload() {
    texts = loadStrings('./asset/text.txt');

}

function setup() {
    createCanvas(600, 800);



    for (let index = 0; index < texts.length; index++) {
        arrayTemp = texts[index].split(" ");

        for (let index = 0; index < arrayTemp.length; index++) {
           word.push(arrayTemp[index]); 
         
        }
    }


    
}

function cosillas(poni){
    posx = random(100,500);
    posy = random(100,700);   
    text(poni,posx,posy);
}

function clusterfuck(){
    for (let index = 0; index < word.length; index++) {

    cosillas(word[index]);
        console.log(posx);
        console.log(posy);
    }
}

function draw() {
    background(200);
    clusterfuck();
    


}
