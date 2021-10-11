/*
Date 11-10-2021

In this tutorial, you will learn how to define your own variable
*/

const canvas_X = window.innerWidth;
const canvas_Y = window.innerHeight;



function setup() {
  createCanvas(canvas_X,canvas_Y);
}

function draw() {
  
  background("#f39ff5");

  
  ellipseMode(CENTER);
  ellipse(canvas_X/2,canvas_Y/2, mouseX, mouseY)
  
}
