//guardar um ficheiro emm SVG

var t, numLinhas, numColunas, escolheForma, meuSVG;

function preload()
{
  //não podemos ter estes dois ao mesmo tempo, só um de cada vez
  meuSVG = loadImage ("meuVetor.svg");
  meuSVG = loadSVG ("meuVetor.svg");
}

function setup() 
{
  createCanvas (596, 842, SVG);
  frameRate(1);
}


function draw() 
{
  background(255);

  t = width/10;
  numLinhas = height/t;
  numColunas = width/t;
  //print(t);

  noStroke();
  fill(0);
  ellipseMode (CORNER);

   for (var x = 0; x<numColunas; x++)
   {
    for (var y = 0; y<numLinhas; y++)
    {
      escolheForma = int (random (1,3));
      //print /escolhaForma)
      
      if (escolheForma === 1)
      {
        ellipse(x*t, y*t, t, t);
      }

      if (escolheForma === 2)
      {
      rect(meuSVG, x*t, y*t, t, t);
      }

    }
  }
}


function keyPressed() 
{
  if (key === "")
  {
    noLoop();
    save ("meuProjeto.svg");
  }  
}
