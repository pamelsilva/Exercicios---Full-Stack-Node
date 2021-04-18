/* Exercício: Numeros Pares


Vamos fazer uma função que nos permita reconhecer números pares.

Crie a função ePar.Ele deve receber um número como parâmetro e retorna um boolean(true / false)
indicando se esse número é divisível por dois.

Use o console para testar a função ePar() e veja se ela retorna o resultado esperado.
Lembre - se de usar o operador do módulo "%". */


function ePar(numero) {
    return numero % 2 == 0
}