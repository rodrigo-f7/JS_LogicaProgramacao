/*
RODRIGO PEREIRA FARIA
28/05/24
*/

let raio = +prompt("Digite o raio de um círculo em cm: ")

const pi = 3.14

const calcularAreaCircunferencia = function (raio){
    //Math.pow, realiza a potência de um número elevado a outro por meio do objeto Math
    return (pi * Math.pow(raio,2)).toFixed(2)
}

const calcularComprimentoCircunferencia = function(raio){
    //ToFixed realiza o arredondamento das casas decimais, ou seja até duas casas decimais.
    return (2 * pi * raio).toFixed(2);
}

console.log(Math.pow(raio,2))

let area = calcularAreaCircunferencia(raio)

document.write(`Sua área foi: ${area}cm² <br>`)

let perimetro = calcularComprimentoCircunferencia(raio);

document.write(`E o comprimento foi: ${perimetro}cm`)