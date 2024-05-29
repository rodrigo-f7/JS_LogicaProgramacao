/*
RODRIGO PEREIRA FARIA
28/05/24
*/

let ladoA = +prompt("Digite o lado a: ")
let ladoB = +prompt("Digite o lado b: ")
let ladoC = +prompt("Digite o lado c: ")

let cond01Tri = ladoA < ladoB + ladoC;
let cond02Tri = ladoB < ladoA + ladoC;
let cond03Tri = ladoC < ladoA + ladoB;

if(cond01Tri && cond02Tri && cond03Tri){
    document.write("Os lados pertencem a um triângulo. ")

    let condEquilatero = ladoA == ladoB && ladoB == ladoC
    let condEscaleno = ladoA != ladoB && ladoA != ladoC && ladoB != ladoC;
    
    if(condEquilatero)
        document.write("É um triângulo equilátero")
    else if(condEscaleno)
        document.write("É um triângulo escaleno");
    else{
        document.write("É um triângulo isósceles")
    }
} else{
    document.write("Não é um triângulo")
}


