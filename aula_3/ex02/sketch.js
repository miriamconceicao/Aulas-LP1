// exercicio de botão 

var x, y, tamanho;
function setup() 
{
  createCanvas (windowWidth, windowHeight);
}

// & - significa e
// || - significa ou

function draw() 
{
  x = width/2;
  y = height/2;
  t = height/2;

  if (
    mouseX >= x - (t/2) && mouseX <= x + (t/2) &&
    mouseY >= y - (t/2) && mouseY <= y + (t/2) && mouseIsPressed === true )

  { 

  fill(255, 0 ,0 );
  }
  else
  { 
  fill (0, 255, 0);
  }

  rectMode (CENTER);
  rect(x, y, t, t);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
