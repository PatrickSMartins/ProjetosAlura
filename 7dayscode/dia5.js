const prompt = require("prompt-sync")();

let i = 0;

let frutas = [];
let contagemFrutas = 0;

let laticinios = [];
let contagemLaticinios = 0;

let congelados = [];
let contagemCongelados = 0;

let doces = [];
let contagemDoces = 0;

let produtos;
let adicionarItem;
let categoria;

for(i;i<50;i++){
    adicionarItem = prompt("Você gostaria de adicionar um produto na sua sacola? Digite sim ou não. R:");

    if(adicionarItem === "Sim" || adicionarItem === "sim") {
        categoria = prompt("Em qual categoria esse produto está? Digite 1 para Frutas, 2 para Laticínios, 3 para congelados e 4 para doces. R:");

        if(categoria == 1){
            produtos = prompt("Qual fruta gostaria de adicionar? R:");
            frutas[contagemFrutas] = produtos;
            contagemFrutas++;
        }

        else if(categoria == 2){
            produtos = prompt("Qual laticínio gostaria de adicionar? R:");
            laticinios[contagemLaticinios] = produtos; 
            contagemLaticinios++;
        }

        else if(categoria == 3){
            produtos = prompt("Qual congelado gostaria de adicionar}? R:");
            congelados[contagemCongelados] = produtos;
            contagemCongelados++;
        }

        else if(categoria == 4){
            produtos = prompt("Qual doce gostaria de adicionar? R:");
            doces[contagemDoces] = produtos;
            contagemDoces++;
        }

    }

    else {
        console.log(`Sua lista de produtos foi: 
        Frutas: ${frutas}. 
        Laticínios: ${laticinios}. 
        Congelados: ${congelados}. 
        Doces: ${doces}.`);
        break;
    }

}