var x1, y1, x2, y2, t, espacamentoHorizontl, numLinhas, linhaActual;

function setup() 
{
  createCanvas (windowWidth, windowHeight);

  t = 20;
  x1 = 0;
  numLinhas = 150;
}


function draw() 
{
  
  espacamentoHorizontal = width/numLinhas;

/*
 
  for (var i = 1; i<numLinhas; 1++)
{

  y1 = height/2 - t/2;
  y2 = height/2 + t/2;

  x1 += espacamentoHorizontal*linhaActual;
  x2 = x1;

  
  line(x1, y1, x2, y2);

  linhaActual++;
}
*/

  x1 = 0;
  for (var x1 = 0; x1 < width; x1+=10)
{

  y1 = height/2 - t/2;
  y2 = height/2 + t/2;

  x2 = x1;

  
  line(x1, y1, x2, y2);

  
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
}