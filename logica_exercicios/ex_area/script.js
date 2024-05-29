/*
RODRIGO PEREIRA FARIA
29/05/24

*/

let base = parseFloat(prompt("Digite a base do triângulo em cm: "))
let altura = parseFloat(prompt("Digite a altura do triângulo em cm: "))

const area = (base * altura) / 2

//Formatando com unidade de medida
base += "cm"
altura += "cm"

//area += "cm quadrados"

document.write(`
    O valor da base foi ${base} <br> 
    E o da altura ${altura} <br>
    A área portanto é igual a ${area}cm²
`)