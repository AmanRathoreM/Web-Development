/*
Date 11-11-202

In this tutorial, you will learn how to define your own variable
*/

const canvas_X = window.innerWidth;
const canvas_Y = window.innerHeight;

const circle_Y = canvas_Y / 2;



function setup() {
  createCanvas(canvas_X,canvas_Y);
}

let circle_X = 0;

function draw()
{
  
  background("#f39ff5");

  
  ellipseMode(CENTER);
  fill(64, 209, 219,mouseX/30);
  ellipse(circle_X, circle_Y, mouseY);
  circle_X += mouseX/90;


}

function mousePressed()
{
  circle_X = 0;
}
