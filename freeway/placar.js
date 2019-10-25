function mostraPlacar(){
  textSize(32);
  text(meuPlacar, 160, 30);
  text(placarOponente, 420, 30);
}

function pontuacao(){
  if(yZeze < 0){
  meuPlacar += 1;
  somPontos.play();
  }
  if(ySasa < 0){
  placarOponente += 1;
  somPontos.play();
  }
}
