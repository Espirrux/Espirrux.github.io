let atropelaZeze = false;
let atropelaSasa = false;

function atropelamento(){
  for(let i=0; i<imgCarro.length; i++){
    atropelaZeze = collideRectRect(xZeze, yZeze, larguraVaca, alturaVaca, xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    
    if(atropelaZeze){
      //Capivara atropelada
      yZeze = 368;
      if(meuPlacar >= 1)
        meuPlacar -= 1;
        somAtropelou.play();
    }
    
    atropelaSasa = collideRectRect(xSasa, ySasa, larguraVaca, alturaVaca, xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    
    if(atropelaSasa){
    //Cobra atropelada
    ySasa = 368;
      if(placarOponente >= 1)
        placarOponente -= 1;
        somAtropelou.play();
    }
    
  }//For
}//atropelamento