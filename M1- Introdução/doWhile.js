/* Exercício: encontre o 5
Queremos construir uma função que receba um array de números como parâmetro.
A função deve passar por esse array e imprimir cada um dos números pelo console.
Se você encontrar um 5, deverá parar a execução e imprimir com console o texto "Encontramos um 5!".
Para resolver este exercício, você DEVE usar o do -
    while. */


function encontreUm5(numeros) {
    let contador = 0;
    do {
        console.log("Encontramos um 5!")
        contador++;
    } while (contador < numeros)
}