function setup() {
  createCanvas(400, 600);
}
var gamespeed = 0
var y1 = -100;
var y2 = -100;
var y3 = -100;
var y4 = -100;
var x1 = 150;
var x2 = 250;
var x3 = 0;
var x4 = 100;
var x5 = 200;
var x6 = 300;
var changeInY1 = 5;
var changeInY2 = 0;
var changeInY3 = 5;
var changeInY4 = 0;

function draw() {
  
  background(200);
  
  fill(0,0,0);
  rect(x3,y1,100,100)
  rect(100,y2,100,100)
  rect(200,y3,100,100)
  rect(300,y4,99,100)
  
  fill(2000, 70,120);
  ellipse(x1,height-30,50)
  ellipse(x2,height-30,50)
  
  if (changeInY1 == 0){
      changeInY2 = 5;
    } else if (changeInY1 == 5){
      changeInY2 =0;
    }
  
  if (changeInY3 == 0){
      changeInY4 = 5;
    } else if (changeInY3 == 5){
      changeInY4 =0;
    }
   
  fill(0,0,255)
if (y1 == height - 130 && x1 == 50){ 
  changeInY1=0;
  changeInY2=0;
  changeInY3=0;
  changeInY4=0;
  y2 = height -130;
  rect (0,0,400,600)
  }  
if (y2 == height - 130 && x1 == 150){
  changeInY1=0;
  changeInY2=0;
  changeInY3=0;
  changeInY4=0;
  y1 = height -130;
  rect (0,0,400,600)
  }  
if (y3 == height - 130 && x2 == 250){
  changeInY1=0;
  changeInY2=0;
  changeInY3=0;
  changeInY4=0;
  y4 = height -130;
  rect (0,0,400,600)
  } 
if (y4 == height - 130 && x2 == 350){
  changeInY1=0;
  changeInY2=0;
  changeInY3=0;
  changeInY4=0;
  y3 = height -130;
  rect (0,0,400,600)
  }
  
  
  y1 = y1 + changeInY1;

if (y1 > height) {
        y1 = -100;
        changeInY1 = random([0,5]);
        y2 = -100;
        changeInY2 = random([0,5]);
    }
  y2 = y2 + changeInY2;
if (y2 > height) {
        y2 = -100;
        changeInY2 = random([0,5]);
        y1 = -100;
        changeInY1 = random([0,5]);
    }
  
        y3 = y3 + changeInY3;
if (y3 > height) {
        y3 = -100;
        changeInY3 = random([0,5]);
        y4 = -100;
        changeInY4 = random([0,5]);
    }

        y4 = y4 + changeInY4;
if (y4 > height) {
        y4 = -100;
        changeInY4 = random([0,5]);
        y3 = -100;
        changeInY3 = random([0,5]);
    }
  
if(keyIsDown(LEFT_ARROW)){
  x1 = 50;
} else {
  x1 = 150;
}
if(keyIsDown(RIGHT_ARROW)){
  x2 = 350;
} else {
  x2 = 250;
  }

}


