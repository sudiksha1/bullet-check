var wall1,wall2,wall3,thickness;
var G1,G2,G3,G4;
var bullet1,bullet2,bullet3,bullet4;
var w1,w2,w3,w4;
var s1,s2,s3,s4;
var deformation;

function setup() {
  createCanvas(800,400);
  G1 = createSprite(750, 50, thickness, height/8);
  G2 = createSprite(750, 150,thickness, height/8);
  G3 = createSprite(750, 250, thickness, height/8);
  G4 = createSprite(750, 350, thickness, height/8);
  G1.shapeColor = "yellow";
  G2.shapeColor = "yellow";
  G3.shapeColor = "yellow";
  G4.shapeColor = "yellow";


  wall1 = createSprite(400, 100, 800, 10);
  wall2 = createSprite(400, 200, 800, 10);
  wall3 = createSprite(400, 300, 800, 10);
  wall1.shapeColor = "white";
  wall2.shapeColor = "white";
  wall3.shapeColor = "white";

  bullet1 = createSprite(50, 50, 20, 5);
  bullet2 = createSprite(50, 150, 20, 5);
  bullet3 = createSprite(50, 250, 20, 5);
  bullet4 = createSprite(50, 350, 20, 5);
  bullet1.shapeColor = "white";
  bullet2.shapeColor = "white";
  bullet3.shapeColor = "white";
  bullet4.shapeColor = "white";

  G1.shapeColor = (80,80,80);
  G2.shapeColor = (80,80,80);
  G3.shapeColor = (80,80,80);
  G4.shapeColor = (80,80,80);

}

function draw() {
  background("black");  
  drawSprites();

   thickness = random(15,25);

  if (mousePressedOver(bullet1)) {
    s1 = random(223,321);
    bullet1.velocityX = s1;
    w1 = random(30,52);
    
  }

  if (mousePressedOver(bullet2)) {
    s2 = random(223,321);
    bullet2.velocityX = s2;
    w2 = random(30,52);
    
  }

  if (mousePressedOver(bullet3)) {
    s3 = random(223,321);
    bullet3.velocityX = s3;
    w3 = random(30,52);
    
  }

  if (mousePressedOver(bullet4)) {
    s4 = random(223,321);
    bullet4.velocityX = s4;
    w4 = random(30,52);
    
  }


  bullet1.collide(G1);
  bullet2.collide(G2);
  bullet3.collide(G3);
  bullet4.collide(G4);
  
  if (G1.X-bullet1.x < (bullet1.width+G1.width)/2) {
    bullet1.velocityX = 0;
    s1 = 0;
    deformation = (0.5 * w1 * s1 * s1)/22509;
    if (deformation>180) {
      
      bullet1.shapeColor = "black";
      text("Bad" ,400,200);
    }

    if (deformation<180 && deformation>100) {
      bullet1.shapeColor = "grey";
      text("Average" ,400,200);
    }

    if (deformation<100) {
      bullet1.shapeColor = "yellow";
      text("GOOD" ,400,200);
    }
  }

  if (G2.X-bullet2.x < (bullet2.width+G2.width)/2) {
    bullet2.velocityX = 0;
    var deformation = 0.5 * w2 * s2 * s2/22509;
    if (deformation>180) {
      
      bullet2.shapeColor = "black";
      text("BAD" ,400,200);
    }

    if (deformation<180 && deformation>100) {
      bullet2.shapeColor = "grey";
      text("AVERAGE" ,400,200);
    }

    if (deformation<100) {
      bullet2.shapeColor = "white";
      text("GOOD" ,400,200);
    }
  }

  if (G3.X-bullet3.x < (bullet3.width+G3.width)/2) {
    bullet3.velocityX = 0;
    var deformation = 0.5 * w3 * s3 * s3/22509;
    if (deformation>180) {
      
      bullet3.shapeColor = "black";
      text("bad" ,400,200);
    }

    if (deformation<180 && deformation>100) {
      bullet3.shapeColor = "grey";
      text("Average" ,400,200);
    }

    if (deformation<100) {
      bullet3.shapeColor = "white";
      text("GOOD" ,400,200);
    }

  if (G4.X-bullet4.x < (bullet4.width+G4.width)/2) {
      bullet4.velocityX = 0;
      var deformation = 0.5 * w4 * s4 * s4/22509;
      if (deformation>180) {
        
        bullet4.shapeColor = "black";
        text("bad" ,400,200);
      }
  
      if (deformation<180 && deformation>100) {
        bullet4.shapeColor = "grey";
        text("Average" ,400,200);
      }
  
      if (deformation<100) {
        bullet4.shapeColor = "white";
        text("GOOD" ,400,200);
      }
    }
  
  }

  if(hasCollided(bullet1,wall1)){
    bullet1.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall1.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall1.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet2,wall2)){
    bullet2.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall2.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall2.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet3,wall3)){
    bullet3.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall3.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall3.shapeColor=color(0,255,0);
    }
  }

  if(hasCollided(bullet4,wall4)){
    bullet4.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);


    if(damage>10)
    {
      wall4.shapeColor=color(255,0,0);
    }


    if(damage<10)
    {
      wall4.shapeColor=color(0,255,0);
    }
  }


}

function hasCollided(lbullet, lwall){
    bullet1RightEdge=lbullet.x+lbullet.width;
    wall1LeftEdge=lwall.x;
    if(bullet1RightEdge>=wall1LeftEdge)
    {
      return true
    }

    bullet2RightEdge=lbullet.x+lbullet.width;
    wall2LeftEdge=lwall.x;
    if(bullet2RightEdge>=wall2LeftEdge)
    {
      return true
    }
    
    bullet3RightEdge=lbullet.x+lbullet.width;
    wall3LeftEdge=lwall.x;
    if(bullet3RightEdge>=wall3LeftEdge)
    {
      return true
    }

    bullet4RightEdge=lbullet.x+lbullet.width;
    wall4LeftEdge=lwall.x;
    if(bullet4RightEdge>=wall4LeftEdge)
    {
      return true
    }
    return false;
}