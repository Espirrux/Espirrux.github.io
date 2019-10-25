function mostraCarros(){
  
  for(let i=0; i < imgCarro.length; i++)
    image(imgCarro[i], xCarro[i], yCarro[i], larguraCarro,     alturaCarro);
}

function movimentaCarros(){
  
  for(let i=0; i < imgCarro.length; i++){
    if(i < 3){
    //Carros para esquerda
      xCarro[i] -= velocidadeCarro[i];
      //Carro chegou  no fim do percurso
      if(xCarro[i] < -55){
        xCarro[i] = 605;
        velocidadeCarro[i] = ceil(random(1,3));
      }
    }else{
    //Carros para a direita
    xCarro[i] +=  velocidadeCarro[i];
      
    if(xCarro[i] > 605){
      xCarro[i] = -55;
      velocidadeCarro[i] = ceil(random(1,3));
      }//Ifs
    }//Else
  }//For
}//Função