var frontPage,secondPage,secondPageImg ;
var gameState="first";
var button,buttonImg;
var f1,f2,f3,f4;
var f1img, f2img,f3img,f4img;
var r1,r2,r3,r4;
var r1img,r2img,r3img,r4img;

function preload(){
  buttonImg=loadImage("Clickhere.png");
  secondPageImg=loadImage("4vs4image.png");
  
  f1img=loadImage("Fighter1.png")
  
  r1img=loadImage("R1.png");
  

}

function setup(){
createCanvas(800,800);
//frontPage=createSprite(400,400,800,800);
//frontPage.shapeColor="#1D7DE8";





}
function draw(){
  background("#1D7DE8");
  if(gameState==="first"){
    //frontPage=createSprite(400,400,800,800);
    //frontPage.shapeColor="#1D7DE8";
    button=createSprite(400,600);
    button.addImage(buttonImg);
    if(mousePressedOver(button)){
      gameState="second";
      //frontPage.destroy();
      //button.destroy(); 
      //button.hide();
      button.remove();
    }

  }
  if(gameState==="second"){
    //secondPage=createSprite(400,400,800,800);
    //secondPage.addImage(secondPageImg);
    //secondPage.scale=2
    background(secondPageImg)
    f1=createSprite(70,100);
    f1.addImage(f1img)
    f1.scale=0.3
    f2=createSprite(70,250);
     f2.addImage(f1img)
     f2.scale=0.3 
     f3=createSprite(70,450);
     f3.addImage(f1img)
     f3.scale=0.3
     f4=createSprite(70,600);
     f4.addImage(f1img)
     
     f4.scale=0.3
     f4.debug=true 
     
     r1=createSprite(740,100);
     r1.addImage(r1img)
     r1.scale=0.3 
     r2=createSprite(740,250);
     r2.addImage(r1img)
     r2.scale=0.3 
     r3=createSprite(740,450);
     r3.addImage(r1img)
     r3.scale=0.3 
     r4=createSprite(740,600);
     r4.addImage(r1img)
     
     r4.scale=0.3 
     r4.debug=true

    
  }
  //if(r1.isTouching(f1)||r2.isTouching(f2)||r3.isTouching(f3)||r4.isTouching(f4)){

     //}
     //else{
     /* if(keyDown("right")){
        f1.x+=50;
        f2.x+=50;
        f3.x+=50;
        f4.x+=50;

       }*/
       if(keyDown("left")){
       // r1.x+=-50;
        //r2.x+=-50;
       // r3.x+=-50;
        r4.velocityX=-5
     
       }
    // }
  
  drawSprites();
  

  
  textSize(25);
    fill ("black");
    text("Welcome to 4 VS 4",280,50);
    
}
