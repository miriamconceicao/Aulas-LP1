
var = cor

function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  cor (255);

  
  if (mouseX < width/2) 
  {
    fill(0);
  }
  else {
    fill(255);

  }
  // rect(0, 0, width/2 ,heigth);


  if (mouseX > width/2) 
  {
    fill(0);
  }
  else {
    fill(255);
  }

  // rect( width/2, 0, width/2, height );
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
