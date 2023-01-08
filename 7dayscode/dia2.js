//Ele deve pedir para o usuário responder 3 perguntas:

//- Qual o seu nome?
//- Quantos anos você tem?
//- Qual linguagem de programação você está estudando?

//À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

//No final, o sistema vai exibir a mensagem:

//"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

const prompt = require("prompt-sync")();

let nome = prompt("Qual é o seu nome?  R: ");

let idade = prompt("Quantos anos você tem?  R: ");

let linguagem = prompt("Qual linguagem de programação você está estudando?  R: ");

console.log("Olá " + nome + " você tem " + idade + " anos e já está aprendendo " + linguagem);

let resposta;

resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.  R: ");

if(resposta == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
}

if(resposta == 2) {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
}

