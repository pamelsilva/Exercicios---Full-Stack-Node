/* Exercício: Façamos uma calculadora
Agora vamos ver como podemos criar uma função que funcione como uma calculadora.
Começaremos com algo simples...

Criaremos quatro funções que executarão as principais operações de uma calculadora: 
seu trabalho será definir as funções somar, subtrair, multiplicar e dividir.
Cada uma delas receberá dois parâmetros e deve executar a operação matemática correspondente.
Por exemplo, a função somar deve retornar a soma de ambos os parâmetros, a função subtrair a 
subtração de ambos os parâmetros e assim por diante
Agora, com as funções já definidas, criaremos a função calculadora.Esta função receberá dois 
parâmetros numéricos e o nome de uma função, que será nosso callback.

Lembre - se de que, ao definir a função calculadora, ela receberá 3 parâmetros: 2 deles serão parâmetros 
numéricos e o outro será o nome de uma função. 
Por exemplo a calculadora(5.2, subtrair) deve retornar 3.*/


function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}

function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}

function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}

function dividir(numeroA, numeroB) {
    return numeroA / numeroB;
}

function calculadora(numeroC, numeroT, contagem) {
    return contagem(numeroC, numeroT);
}
console.log(calculadora(5, 2, subtrair));