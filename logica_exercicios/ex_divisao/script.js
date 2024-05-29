/*
RODRIGO PEREIRA FARIA
29/05/24
*/

const n1 = +prompt("Digite um número: ");

const n2 = +prompt("Digite outro número: ")

document.write(`N1 = ${n1}; N2 = ${n2}`);

let divisao = n1 / n2;

document.write("<br>Divisão entre esses números = " + divisao)

document.write("<br>Divisão com arredondamento = " + Math.round(divisao))

document.write("<br>Divisão com arredondamento decimal = " + divisao.toFixed(2))
