//variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

//variáveis minha raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

//velocidade bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//variável da biblioteca importada
let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  moveBolinha();
  colisaoBorda();
  Raquete(xRaquete,yRaquete);
  moveRaquete();
  ColisaoRaquete(xRaquete,yRaquete);
  ColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  Raquete(xRaqueteOponente,yRaqueteOponente);
  //moveOponente();
  placar();
  marcaPonto();
  multiplayer();
  bolinhaNaoFicaPresa();
  
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function moveBolinha(){
  xBolinha +=velocidadeXBolinha;
  yBolinha +=velocidadeYBolinha;
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}


function colisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function Raquete(x,y){
  rect(x,y, comprimentoRaquete,alturaRaquete);
}

function moveRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -=10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10
  }
}


function ColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
    velocidadeXBolinha*= -1;
    raquetada.play();
  }
}

function moveOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYBolinha;
  calculaChanceDeErrar();
}

function calculaChanceDeErrar(){
  if(pontosOponente>=meusPontos){
     chanceDeErrar+=1;
    if(chanceDeErrar>=39)
      chanceDeErrar=40;
  }
  else
    chanceDeErrar -=1;
  
  if(chanceDeErrar <=35)
    chanceDeErrar = 35;
}

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20)
  fill(255);
  text(pontosOponente, 470, 26)
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos ++;
    ponto.play();
  }
  if(xBolinha < 10){
    pontosOponente ++;
    ponto.play();
  }
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function multiplayer(){
  if(keyIsDown(87)){
    yRaqueteOponente -=10
  }
  if(keyIsDown(83)){
    yRaqueteOponente +=10
  } 
}