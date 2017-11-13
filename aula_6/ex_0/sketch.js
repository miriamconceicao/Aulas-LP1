
var x, y, t, v, factorCrescimento;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  x = width/2;
  y = height/2;

  vX = 1;
  vY = vX;
  
}


function draw() 
{

  if (frameCount%int (random (20,100)) === 0);
  {
    vX = int(random (-2, 2));
    vY = int(random (-2, 2));
}

  vX += vX;
  vY += vY;

  if(x<=0) x++;
  if (x>=width) x--; 
  if(y<=0) y++;  
  if (y>=height) y--;

  point (x, y);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
