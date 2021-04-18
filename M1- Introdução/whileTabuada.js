/* Exercício: criando a tabela de multiplicação
Vamos criar uma função e atribuí - la a uma variável!

Para este exercício, oferecemos a função tabelaDeMultiplicacao já definida, que recebe um número como parâmetro.
Queremos que a função mostre a tabela de multiplicação de 1 a 10 do número que recebe quando a função é 
executada.


Por exemplo, se o número que passarmos por parâmetro
for 5, a função deverá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

    ...

até chegar ao 10. */


function tabelaDeMultiplicacao(numero) {
    let i = 1;
    while (i <= 10) {
        console.log(numero + " * " + i + " = " + (numero * i));
        i++;
    }
}