
// esta tudo mal


function setup() 
{
  createCanvas (windowWidth, windowHeight);
}


function draw() 
{
  background(255);

  rect(0, 0, width/2, height/2);

  if (mouseX > 0 && mouseX <width/2 &&
    mouse Y >0 && mouse Y < height/2)
    {
      fill(0);
    }
  
    else
    {
      noFill();
    }


    rect (0, 0, width/2, height/2);



  rect(width/2, 0,  width/2 , height/2);

  if (mouseX > 0 && mouseX <width/2 &&
    mouse Y >0 && mouse Y < height/2)
    {
      fill(0);
    }
  
    else
    {
      noFill();
    }
    rect (0, 0, width/2, height/2);



  rect(0, height/2 ,width/2, height/2);

  if (mouseX > 0 && mouseX <width/2 &&
    mouse Y >0 && mouse Y < height/2)
    {
      fill(0);
    }
  
    else
    {
      noFill();
    }
    rect (0, 0, width/2, height/2);



  rect(width/2, height/2, width/2, height/2);

  if (mouseX > 0 && mouseX <width/2 &&
    mouse Y >0 && mouse Y < height/2)
    {
      fill(0);
    }
  
    else
    {
      noFill();
    }
    rect (0, 0, width/2, height/2);
}


function windowResized() 
{
  resizeCanvas (windowWidth, windowHeight);
}
