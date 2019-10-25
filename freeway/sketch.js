function setup() {
  createCanvas(larguraTela, alturaTela);
  //somTrilha.setVolume(0.2);
  //somTrilha.loop();
}

function draw(){
  if(frameCount >200){ 
     
    //5 segundos
    if(meuPlacar < 5 && placarOponente < 5)
      jogar();
    else
        verificaVencedor();
   }else
     telaInicial();
}


function verificaVencedor(){
  if(meuPlacar >= 5)
    capivaraGanhou(); // Tela final
  else
    cobraGanhou(); //Tela final
}

function jogar(){
  background(imgEstrada);  
  mostraCarros();
  movimentaCarros();
  mostraAtores();
  movimentaAtores();
  mostraPlacar();
  pontuacao();
  resetaZezeSasa();
  atropelamento();
}

function telaInicial(){
  background("#ff051a");
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(40);
  fill("#a6673a")
  text("Beira Rio do Programador",300, 190)
  textSize(25);
  fill("White")
  text("Desenvolvido por Cavica", 300, 220)
  
}

function capivaraGanhou(){
  background("#008bfc");
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(25);
  fill("White")
  text("Vaca Will Smith Ganhou!!", 300, 200)
  image(imgVaca1, 250, 20, 100, 100);
}

function cobraGanhou(){
  background("#fc0000");
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(25);
  fill("White")
  text("Cobra Simone Silva Ganhou!!", 300, 200)
  image(imgVaca2, 250, 20, 100, 100);
}


