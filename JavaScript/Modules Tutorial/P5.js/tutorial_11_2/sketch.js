/*
Date 11-10-2021

In this tutorial, you will learn about random function of P5.js
*/

const canvas_X = window.innerWidth;
const canvas_Y = window.innerHeight;
let random_value, r, g, b, alpha, X_axis, Y_axis;

function setup() {
  createCanvas(canvas_X,canvas_Y);
  background("#f39ff5");
}



function draw()
{

  r = random(255);
  g = 0;
  //! g = random(255);
  b = random(255);

  alpha = 110;
  //! alpha = random(20, 150);
  
  X_axis = random(canvas_X);
  Y_axis = random(canvas_Y);


  fill(r, g, b, alpha);
  noStroke();
  ellipse(X_axis,Y_axis,(50, 100));
  
}
