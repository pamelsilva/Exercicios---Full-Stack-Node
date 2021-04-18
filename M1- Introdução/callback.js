/* Exercício: Passando um Callback
Vamos criar três funções e ver como iniciar a trabalhar com os callbacks.

A primeira função se chamará dobro que receberá um número e retornará o dobro.
A segunda função se chamará triplo que recebera um número e retornará o triplo.
A terceira função será chamada de aplicar e receberá um valor e o nome de uma função como parâmetro.
Ela retornará o valor da aplicação da referida função ao valor recebido.

Exemplo:

aplicar(2, dobro); // 4
aplicar(4, triplo); // 12

Depois de ter as funções dobro e triplo, é hora de criar a função aplicar.Ao defini - la, lembre - se
de que ele recebe um valor e uma função.Esta função terá que ser executada internamente para poder
retornar o valor desejado. */

function dobro(numeroA) {
    return numeroA * 2;
}

function triplo(numeroB) {
    return numeroB * 3;
}

function aplicar(numeroT, contagem) {
    return contagem(numeroT);
}

console.log(aplicar(2, dobro));