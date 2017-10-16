//tipo de letra

var frase;
function setup() 
{
  createCanvas (windowWidth, windowHeight);

  frase = "Vou cortar os pulsos!!!";
}


function draw() 
{
background (255);
textStyle (ITALIC); //NÃO FAZER ISTO NUNCA, ACHAR UM TIPO DE LETRA COM ITALICO
textAlign (CENTER, CENTER);
textFont ("Roboto");
textSize(50);
textLeading (200);
text(frase, width/2, height/2, 50);
//text(frase, random (width), (random height)); = aparecer a frase aleatóriamente sobreposta em todo o ecrã.
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
