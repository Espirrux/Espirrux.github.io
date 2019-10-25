function mostraAtores(){
  //Mostra Player 1 (ZEZE)
  image(imgVaca1, xZeze, yZeze, larguraVaca, alturaVaca);
  //Mostra Player 2 (SASA)
  image(imgVaca2, xSasa, ySasa, larguraVaca, alturaVaca);
}

function movimentaAtores(){
  //Movimenta Player 1 (ZEZE)
  if(keyIsDown(87)){
    //yVaca = yVaca - 3
    if(yZeze > -368)
    yZeze -= 5;
  }
  if(keyIsDown(83)){
    if(yZeze < 368)
    yZeze += 5;
  }
  //Movimenta Player 2 (SASA)
  if(keyIsDown(UP_ARROW)){
    if(ySasa > -330)
      ySasa -= 5;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(ySasa < 368)
      ySasa += 5;
  }
}

function resetaZezeSasa(){
  if(yZeze < -0){
  yZeze = 368;
  }
  if(ySasa < -0){
  ySasa = 368;
  }
}