

function setup() 
{
  createCanvas (windowWidth, windowHeight);
  frameRate(1);
  colorMode(RGB, 255, 255, 255, 100);
}

function draw() 
{
	print(frameRate());
	
  background( random(0, 255), random(0, 255), random(0, 255) );
  
  //quadrado
  fill (250);
  stroke (0, 0, 0);
  strokeWeight (8);
  rectMode(CENTER);
  noFill();
  rect (width/2, height/2, 250, 250);
  
  strokeWeight(10);
  fill (0, 0, 0);
  ellipse (width/2, height/2, 100, random(0,100));
  ellipseMode (CORNER);
  
  strokeWeight(5);
  line(width/2, 0, width/2, height);
  
  strokeWeight(10);
  point(width/2, height/2);
}
function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);

}
