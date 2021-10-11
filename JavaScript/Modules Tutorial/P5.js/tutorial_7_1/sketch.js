/*
Date 11-10-2021

In this tutorial, you will learn about variables and a bit about animations
*/

function setup() //* This function will only execute once
{
  createCanvas(1800, 1000);
}

function draw() //* This function will continue to execute till program dies/end
{
  background("#f39ff5");
  ellipseMode(CENTER);
  fill(mouseY/5, 206, 0,mouseX/10);
  ellipse(mouseX,mouseY, 200, 200);
}
