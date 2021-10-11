/*
Date 11-10-2021

In this tutorial, you will learn about random function of P5.js
*/

const canvas_X = window.innerWidth;
const canvas_Y = window.innerHeight;
let random_value;
let line_width;

function setup() {
  createCanvas(canvas_X,canvas_Y);
  background("#f39ff5");
}



function draw()
{
  random_value = random(canvas_X / 3, canvas_Y / 3);
  line_width = random(9, 60);
  stroke(94,10,255,120);
  strokeWeight(line_width);
  fill(235, 114, 70, 35);
  square((canvas_X / 2)-(random_value/2), (canvas_Y / 2)-(random_value/2), random_value);
  
}
