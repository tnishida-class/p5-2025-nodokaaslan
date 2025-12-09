
let x, y;
let vx, vy;
const g = 1;
const jump = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1;

 
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  fill(0);
  ellipse(x, y, size, size);

  vx = constrain(vx, -20, 20); 
  vy = constrain(vy, -20, 20);

  x += vx;
  y += vy;


  
  if(keyIsDown(LEFT_ARROW)){ x -= 5;
    if(keyIsDown("S".charCodeAt(0))){ x -= 10;}
  }
  if(keyIsDown(RIGHT_ARROW)){ x += 5;
    if(keyIsDown("S".charCodeAt(0))){ x += 10;}
  }

  
  y += vy;
  if(y < groundY-(size/2)){
    vy += g;
  } 
  else{
    vy = 0;
    y = groundY-(size/2);
  }
  if(keyIsDown(" ".charCodeAt(0))){ 
    if(y >= groundY-(size/2)){vy = -jump;}}
}
