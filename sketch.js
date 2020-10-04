var wall, thickness;
var bullet,speed, weight;

function setup() {
	//setting the size of the canvas
  createCanvas(1600, 400);

	//giving random speed and velocity 
  speed=random(223,321)
  weight=random(30,52)


	//giving a random thickness
  thickness=random(22,83)




  
	//creating a bullet sprite object, giving it a speed and color
    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);

 
  	
    
	//creating a wall sprite object 
    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);  
	
  
	//checking wheather the bullrt has collided with the wall and then calculating the damage to the wall
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
 
}


//making a different function to check wheather the bullet has collided with the wall or not
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
