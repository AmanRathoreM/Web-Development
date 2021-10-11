/*
Date 11-10-2021

In this tutorial, you will learn about coloures in P5.js
*/

function setup() {
  createCanvas(1400, 700);
}

function draw() {
  background(113, 125, 227);
  
  rectMode(CENTER);

  fill("#0000ff");
  stroke("#00ff00");
  rect(700, 350, 50, 50);

  fill(243, 159, 245,100);
  noStroke("#bf000a");
  ellipse(700, 300, 70, 500)

}
