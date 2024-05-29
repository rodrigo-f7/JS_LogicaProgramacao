/*Este exercício é das atividades, por isso utilizei conhecimentos diferentes para exercitar e não esquecer
RODRIGO PEREIRA FARIA
28/05/24
*/  

let nome = prompt("Digite o nome do estudante: ")

let quantidadeNotas = 3;

function criarVetorNotas(qtdNotas){
    let vetorNotas = [];
    
    for(let i = 0; i < qtdNotas; i++){
        let nota = +prompt("Digite a nota " + i + ": ")
        /*Metodo .push
        Existem vários métodos relacionados com os vetores. O método vetor.push() insere elementos no final do vetor
        */
        vetorNotas.push(nota);
    }
    return vetorNotas;
}

function exibirNotasHTML(notas){
    for(let i = 0; i < notas.length; i++){
        document.write(`Nota0${i+1} = ${notas[i]}<br>`)
    }
}

function somarManual(notas){
    let soma = 0;
    for(let i = 0; i < notas.length; i++){
        soma+=notas[i];
    }
    return soma;
}

function somarReduce(notas){
    /*Método . reduce
    É um método de vetores que percorre todo o vetor e executa operações sobre ele. Possui uma função callback que chama a própria função. Um exemplo prático de seu uso é na soma de todos os números de um vetor.
    */

    let somaEfetiva = notas.reduce(function (soma, i){
        return soma+i
    });
    return somaEfetiva;    
}

const calcularMedia = function (soma, quantidade){
    return soma/quantidade;
}

let notas = criarVetorNotas(quantidadeNotas);

document.write(`${nome}, suas notas foram: <br>`)

exibirNotasHTML(notas)

//Somando com método reduce
let soma = somarReduce(notas);
document.write(`Soma das notas foi: ${soma}<br>`)

let media = calcularMedia(soma, notas.length);

document.write("Sua média final foi: " + media)

/*
let media = (nota01 + nota02 + nota03) / 3;

document.write(nome + ", sua média foi: " + media);
*/