/*
Date 11-10-2021

This tutorial is an exercise in which you need to make a program which use random function and mouse position variable to do stuff  
*/

const canvas_X = window.innerWidth;
const canvas_Y = window.innerHeight;
let size;

function setup() {
  createCanvas(canvas_X,canvas_Y);
  background("#f39ff5");
}


function draw()
{

  r = random(255);
  g = 0;
  b = random(255);

  alpha = 110;

  
  size = random(50, 100);
  noStroke();
  fill(r, g, b, alpha);
  ellipse(mouseX, mouseY, size);
}

function mouseClicked()
{
  background("#f39ff5");
}

