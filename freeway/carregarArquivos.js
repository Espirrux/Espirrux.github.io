//Variáveis para as Imagens
let imgEstrada;
let imgVaca1;
let imgVaca2;
let imgCarro = [];

function preload(){
  imgEstrada = loadImage('imagens/estrada.png');
  imgVaca1 = loadImage('imagens/ator-1.png');
  imgVaca2 = loadImage('imagens/ator-1.png');
  imgCarro[0] = loadImage('imagens/carro-1.png');
  imgCarro[1] = loadImage('imagens/carro-2.png');
  imgCarro[2] = loadImage('imagens/carro-3.png');
  imgCarro[3] = loadImage('imagens/carro-4.png');
  imgCarro[4] = loadImage('imagens/carro-6.png');
  imgCarro[5] = loadImage('imagens/carro-5.png');
  somPontos = loadSound('sons/pontos.wav')
  somAtropelou = loadSound('sons/colidiu.mp3');
  somTrilha = loadSound('sons/trilha.mp3');
  
}

//Variáveis para Placar
let meuPlacar = 0;
let placarOponente = 0;


//Variáveis da Tela
let alturaTela = 400;
let larguraTela = 600;

//Variáveis de Movimento
//                Direita   /   Esquerda              
let xCarro = [605, 605, 605, -55, -55, -55];
let yCarro = [45, 100, 150, 215, 270, 320];
let velocidadeCarro = [5, 7, 3, 3, 5, 7];
let yZeze = 368;
let xZeze = 150;
let ySasa = 368;
let xSasa = 420;
let larguraVaca = 28;
let alturaVaca = 28;

//Variáveis dos Carros
let alturaCarro = 30;
let larguraCarro = 50;