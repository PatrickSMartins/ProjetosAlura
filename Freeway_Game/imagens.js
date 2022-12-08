// Var imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

let trilha;
let colidiu;
let ponto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png"); 
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png");
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro, imagemDoCarro2, imagemDoCarro3]
  
  trilha = loadSound ("sons/trilha.mp3");
  colidiu = loadSound ("sons/colidiu.mp3");
  ponto = loadSound ("sons/pontos.wav");
  
}
