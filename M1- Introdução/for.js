/* Exercício: Repita como um papagaio
Vamos programar uma função que se comporte como um papagaio.Sim, Tudo o que "ouve", repete!

O função se chama papagaio e deve receber como parâmetro um texto e repetir 5 vezes no console. */


var texto = "Olá mundo!"

function papagaio(texto) {
    for (let fala = 0; fala < 5; fala++) {
        console.log(texto)
    }
}