const prompt = require("prompt-sync")();

function soma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function subtracao(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicacao(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function divisao(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do { 
	
    operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);	
    while (operacao != "soma" && operacao != "subtração" && operacao != "multiplicação" && operacao != "divisão" && operacao != "sair") {  
	console.log(`Operação não reconhecida!`);
	operacao = prompt(`Qual operação você quer realizar? Responda 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'.`);
    }
	
    if (operacao === "sair"){  
		break;	
    }
	
    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);
    switch (operacao) {
        case 'soma':
          console.log(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
          break;
        case 'subtração':
            console.log(`O resultado da ${operacao} é ${subtracao(valor1, valor2)}`);
            break;
        case 'multiplicação':
            console.log(`O resultado da ${operacao} é ${multiplicacao(valor1, valor2)}`);
            break;
        case 'divisão':
            console.log(`O resultado da ${operacao} é ${divisao(valor1, valor2)}`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
console.log(`Até a próxima!`);