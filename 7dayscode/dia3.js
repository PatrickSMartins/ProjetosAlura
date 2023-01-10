const prompt = require("prompt-sync")();

const area = prompt("Você quer seguir para área de Front-End ou Back-End? Digite o nome da área:");
let linguagem = "";

if(area === "Front-End") {
    linguagem = prompt("Você quer aprender React ou Vue? R:");
}
else if(area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java? R:");
}
else {
    console.log("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack.  R:");
if(especialidadeOuFullstack == 1){
    console.log(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if(especialidadeOuFullstack == 2){
    console.log(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    console.log("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo. R:");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual? R:  ");
    console.log(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo. R:");
}
