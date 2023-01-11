const prompt = require("prompt-sync")();

let adivinhe;
let acertou = false;

function numeroAleatorio (){
   return Math.floor(Math.random() * (10 - 0 + 1) + 0);
}

for(let i=0;i<3;i++){
    adivinhe = prompt("Adivinhe um número de 0 a 10. R:");
    if(adivinhe == numeroAleatorio()){
        console.log("Parabéns você acertou!!");
        acertou = true;
        break;
    }
}
if(!acertou){
console.log("Você errou, que pena!! O número era: "+numeroAleatorio());
}