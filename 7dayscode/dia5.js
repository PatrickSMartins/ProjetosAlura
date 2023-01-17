const prompt = require("prompt-sync")();

let i = 0;

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let produtos = "";
let adicionarItem;
let categoria;

for(i;i<50;i++){
    adicionarItem = prompt("Você gostaria de adicionar um produto na sua sacola? Digite sim ou não. R:");

    if(adicionarItem === "Sim" || adicionarItem === "sim") {
        categoria = prompt("Em qual categoria esse produto está? Digite 1 para Frutas, 2 para Laticínios, 3 para congelados e 4 para doces. R:");

        if(categoria == 1){
            produtos = prompt("Qual fruta gostaria de adicionar? R:");
            frutas.push(produtos);
        }

        else if(categoria == 2){
            produtos = prompt("Qual laticínio gostaria de adicionar? R:");
            laticinios.push(produtos); 
            
        }

        else if(categoria == 3){
            produtos = prompt("Qual congelado gostaria de adicionar}? R:");
            congelados.push(produtos);
            
        }

        else if(categoria == 4){
            produtos = prompt("Qual doce gostaria de adicionar? R:");
            doces.push(produtos);
            
        }

    }

    else {
        console.log(`Sua lista de produtos foi:\n Frutas: ${frutas}.\n  Laticínios: ${laticinios}.\n Congelados: ${congelados}.\n Doces: ${doces}.`);
        break;
    }

}