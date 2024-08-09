let xb = 300;
let yb = 200;
let diametro = 15;
let raio = diametro/2;
let vxb = 6;
let vyb = 6;
    
let xr = 5;
let yr = 150;
let lr = 7;
let ar = 80;

let xri = 585;
let yri = 150;

let colidiu = false;

let meuspontos = 0;
let pontosoponente =0;

let trilha;
let ponto;
let raquetada;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.play();
}

function draw() {
  background("rgb(70,11,11)");
  mostrabola();
  mostraraquete(xr,yr,color("rgb(232,220,44)"));
  mostraraquete(xri,yri,color("rgb(84,191,226)"));
  mexebola();
  quicabola();
  mexeraquete();
  mexeraqueteinimiga();
  quicaraquetebola(xr,yr);
  quicaraquetebola(xri,yri);  
  placar();
  pontos();
  letras();
  stroke("grey");
  rect(300,0,1,600);
}

function  mostrabola(){
  circle(xb,yb,diametro);
}

function mostraraquete(x,y,color){
  fill(color)
  rect(x,y,lr,ar);
}

function mexebola(){
      xb += vxb;
      yb += vyb;
}

function quicabola(){
if (xb + raio > width || xb - raio < 0){
  vxb *= -1;
}
}
function quimicabola(){
if (yb + raio > hight || yb - raio < 0){
  vyb *= -1;
}
}
    function mexeraquete(){
if (keyIsDown(UP_ARROW))
  yr -= 10;
  
  if (keyIsDown(DOWN_ARROW))
  yr += 10;
    }

   function mexeraqueteinimiga(){
if (keyIsDown(87))
  iri -= 10;
  
  if (keyIsDown(83))
  yri += 10;
   }
  function quicaraquetebola(x,y){
  colidiu = collideRactCircle(x,y,lr,ar,xb,yb,raio);
    
    if (colidiu){
      vxb *= -1;
      raquetada.play();
    }
  }
function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(18);
  fill("violet");
  rect(150,10,40,20);
  fill("rgb(53,168,53)")
  text(meuspontos, 170, 25);
  
  fill("rgb(172,242,243)");
  rect(430,10,40,20);
  fill("violet")
  text(pontosoponente, 450, 25);
}

function pontos(){
  if (xb > 1){
    pontosoponente +=1;
    ponto.play();
}
}
 if (xb > 1){
    pontosoponente +=1;
}

function lestras(){
 let frase = "MEUS PONTOS";
 let frase2 = "PONTOS OPONENTES";
  textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase,90,40);
  
   textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase2,335,40);
}