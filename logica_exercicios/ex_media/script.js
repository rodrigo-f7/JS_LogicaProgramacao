
//Dando entrada de dados em número (coloca-se o + para denotar que é número ao invés de string)
//var num01 = +prompt("Digite um número: ")

var num01 = parseInt(prompt("Digite um número: "))

//let num02 = +prompt("Digite outro número: ")

let num02 = parseInt(prompt("Digite outro número: "))

document.write("Número 01 digitado = " + num01 + "<br>")
document.write("Número 02 digitado = " + num02 + "<br>")
document.write("Média = " + ((num01+num02)/2))