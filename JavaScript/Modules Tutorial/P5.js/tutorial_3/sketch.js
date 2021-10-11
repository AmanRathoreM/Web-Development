/*
Date 11-10-2021

In this tutorial, you will learn about how to draw on canvas
*/

function setup() {
  createCanvas(1400,700);
}

function draw() {
  background("#f1f774");
  rect(100, 50, 500, 200);
  rect(800, 50, 500, 200 , 5, 50, 5, 50);
  line(700, 5, 700, 695);

  //? rectMode(CENTER);
  rect(700,350, 100,100);
}
