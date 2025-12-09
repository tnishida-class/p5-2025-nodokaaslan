// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  
  noStroke();
for(let i = 0; i < 8; i++){
  for(let j = 0; j < 8; j++){
      let s=i+j
      if( s % 2 == 0){
        fill(255,255,255);
        rect(i*25,j*25,25,25)
        }
        else{
          fill(100);
          rect(size*i,size*j,25,25)
        }
      }
    } 
for(let i = 0; i< 8; i++){
  for(let j = 0; j<8; j++){
    s=i*25+12.5
    t=j*25+12.5
    x=s+t
     if( x % 2 == 0){
       fill(255,0,0);
       ellipse(s,t,20,20)
     if(j>=3){
        fill(100);
        ellipse(s,t,25,25)
     }
     if(j>=5){
       fill(0);
       ellipse(s,t,20,20)}
       
     
     }
     
  }
}
  
}
  
  
  
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j


  