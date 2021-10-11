/*
Date 11-10-2021

In this tutorial, you will learn about variables and a bit about animations
*/

function setup() //* This function will only execute once
{
  createCanvas(1800, 900);
  background("#f39ff5");
}

function draw() //* This function will continue to execute till program dies/end
{
  ellipseMode(CENTER);
  noStroke()
  fill(10, 206, 100,130);
  ellipse(mouseX,mouseY, 10);

}
function mousePressed() {
  background("#f39ff5");
}
