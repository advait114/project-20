var cat , catImg;
var mouse, mouseImg;

function preload() {
    //load the images here
cat=loadImage("cat3.png")
mouse=loadImage("mouse3.png")
background=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {
background(gardenImg)
   text(mouseX+','+mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
