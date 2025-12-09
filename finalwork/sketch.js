// 最終課題を制作しよう


let x, y;
let vx, vy;
const g = 1;
const jump = 40;
let s,t;



function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
  s = random(300,400);
  t = random(100,200);
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
  
  
  
  step()
  
  

  fill(0);
  ellipse(x, y, size, size);

  vx = constrain(vx, -20, 20); 
  vy = constrain(vy, -20, 20);

  x += vx;
  y += vy;

  if(keyIsDown(LEFT_ARROW)){ x -= 10;
    if(keyIsDown("S".charCodeAt(0))){ x -= 20;}
  }
  if(keyIsDown(RIGHT_ARROW)){ x += 10;
    if(keyIsDown("S".charCodeAt(0))){ x += 20;}
  }

  y += vy;
  
  if(y < groundY-(size/2) ){
    vy += g;
  } 
  
  else{
    vy = 0; 
    y = groundY-(size/2);
  }
  
  
  if(y >= (s-(size/2)) && y<= (s+(t/2)) && s<x && x<(s+t) && vy >=0){
    y = (s-(size/2));
    vy=0;
    }
  if(s<x && x<(s+t)&& y<s+(t/2)+(size/2) && y >(s+(t/2))){
     vy= 0;
     y=s+(t/2)+(size/2);
    }
  
  
  
  if(keyIsDown(" ".charCodeAt(0))){ 
    if(y >= groundY-(size/2)){vy = -jump;} 
    if(y >= s-(size/2)&& s<x && x<(s+t)){vy = -jump;}
  }
    
 
}
function step(){
  fill(204,102,0);
  rect(s,s,t,t/2)
  
}

