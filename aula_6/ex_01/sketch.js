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
  linhaActual = 0;
  espacamentoHorizontal = width/numLinhas;

 /* 
  while (x1<width)
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
while (x1<width)
{

  y1 = height/2 - t/2;
  y2 = height/2 + t/2;

  x1 += 10;
  x2 = x1;

  
  line(x1, y1, x2, y2);

  linhaActual++;
}

function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
}