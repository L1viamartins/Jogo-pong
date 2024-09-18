// posiçao bola 

let xBola = 300;
let yBola = 200;
let diametro =  13;
let raio = diametro / 2 ;

// velocidade Bolinha

let velocidadeXbola = 2;
let velocidadeYbola = 6;

// posiçao raquete 

let xRetangulo = 3;
let yRetangulo = 150
let comprimentoRaquete = 10 
let alturaRetangulo = 90

// raquete oponente 

let xRetanguloOponente = 583;
let yRetanguloOponente = 150
let velocidadeYoponente; 
let retanguloOponenteComprimento = 10
let retanguloOponenteAltura = 90

let superiorRetangulo = yRetangulo
let inferiorRetangulo = yRetangulo
 

let colidiu = false//placar do jogo 

 let meusPontos = 0
 let pontosDoOponente = 0 

// sons Do Jogo 

//let raquetada 
let trilha 
let ponto


function preload(){
  raquetada = loadSound ("raquetada.mp3")
  trilha = loadSound  ("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
// trilha.loop()

}

function draw() {
  background(0);
  mostrarBolinha();
 movimentaBolinha();
  colisaoBolaBorda();
 // bolaNaoFicaPresa()
  mostrarRetangulo(xRetangulo, yRetangulo);
  movimentaRetangulo();
 // movimentaRaqueteOponenteDupla()
  movimentaRetanguloOponenteSozinho()
 verificaColisaoRetangulo()
  verificaColisaoRetanguloOponente()
  //verificaColisaoRetanguloBiblioteca(xRetangulo, yRetangulo)
  //verificaColisaoRetanguloBiblioteca( xRetanguloOponente, yRetanguloOponente)
  mostrarRetangulo(xRetanguloOponente, yRetanguloOponente) 
  incluiPlacar()
  marcarPontos()
  bolaNaoFicaPresaOponente()
  

}



function mostrarBola(){
  
  circle (xBola, yBola,  diametro);
}

function movimentaBola(){
  
  xBola += velocidadeXbola;
 yBolinha  += velocidadeYbola;
}

function colisaoBolaBorda(){
  
    if (xBola + raio > width 
        || xBola - raio < 0){
     velocidadeXbola *= -1
  }
 
  if (yBola + raio > height 
     || yBola - raio < 0){
    velocidadeYbola *= -1
  }
    
} 

function mostrarRetangulo(x, y){
  
  rect (x, y, comprimentoRetangulo, alturaRetangulo)
}

function movimentaRetangulo(){
  
 if (keyIsDown(UP_ARROW) ){
   yRetangulo -= 10
   
 }
  if  (keyIsDown(DOWN_ARROW)){
    yRetangulo += 10
  }
  
 yRetangulo = constrain (yRetangulo,3,310)
   
 
}

function bolaNaoFicaPresa(){
    if (xBola - raio < 0) {
    xBola += 15
    }
}

 function bolaNaoFicaPresaOponente(){
    if (xBola + raio < 5){
      xBola += -15
    }
  }

function movimentaRetanguloOponenteDupla(){
  
  if (keyIsDown(87)){
   yRetanguloOponente -= 10
   
 }
  if  (keyIsDown(83)){
    yRetanguloOponente += 10
  }
  
   constrain (superiorRetangulo,0 ,355)
 
}

function movimentaRetanguloOponenteSozinho(){
  velocidadeYoponente = yBola - yRetanguloOponente -
  comprimentoRetangulo / 2  - 86.9
  yRetanguloOponente += velocidadeYoponente  
  
 yRetanguloOponente = constrain (yRetanguloOponente,3,310)
}

function verificaColisaoRetangulo(x, y){
   if (xBola - raio < xRetangulo + comprimentoRetangulo & 
    yBola - raio < yRetangulo + alturaRetangulo & 
    yBola + raio > yRetangulo){
    velocidadeXbola *= -1 
  raquetada.play()
      
}
  
}

function verificaColisaoRetanguloOponente(){
  
  if (xBola + raio > xRetanguloOponente + retanguloOponenteComprimento &
      yBola - raio < yRetanguloOponente + retanguloOponenteAltura &
  yBola + raio > yRetanguloOponente - retanguloOponenteAltura
  ){
    
    velocidadeXbola *= -1
    raquetada.play()
  }
}

    
/*
function verificaColisaoRetanguloBiblioteca(x,y){
  colidiu = 
  collideRectCircle (x, y, comprimentoRetangulo, alturaRetangulo, xBola, yBola,diametro, raio ) 
  if (colidiu){
    velocidadeXbola *= -1 
    raquetada.play()
  }
}
*/

function incluiPlacar(){
  
  stroke (255)
  textAlign (CENTER)
  textSize (16)
  fill (color (0,128,0) )
  rect (150, 10, 40, 20)
  fill (255)
  text (meusPontos, 170,  26)
  fill (color (0,128,0) )
  rect (450, 10, 40, 20)
  fill(255)
  text (pontosDoOponente, 470,  26)
}

function marcarPontos(){
  
  if (xBola > 593){
    meusPontos += 1
    ponto.play()
    
  }
      
  if (xBola < 7){
    pontosDoOponente += 1
    ponto.play()
  }
    
}
