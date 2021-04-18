/* Exercício: Contar ímpares
Vamos criar uma função e atribuí - la a uma variável!

    Nesse exercício precisa fazer dentro da função naoPareDeContarImparesAte um
for que conte de 0 até um número.A função deverá retornar a quantidade de números impares que foram encontrados
até chegar ao número.

(Dentro da condicional do for) você deveria usar o parâmetro que é enviado para a função. */



function naoPareDeContarImparesAte(numero) {
    let contarImpares = 0;
    for (let i = 0; i < numero; i++) {
        if (i % 2 != 0) {
            contarImpares++;
        }
    }
    return contarImpares;
}
let resultado = naoPareDeContarImparesAte(100);
console.log(resultado)