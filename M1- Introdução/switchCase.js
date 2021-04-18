/* Exercício: Eu tenho classes
O objetivo deste exercício é imprimir um texto na tela, que será condicionado da seguinte maneira.
Usando "switch"
você deve avaliar se a variável "dia"
é segunda, quarta ou sexta - feira e, nesse caso, você deve imprimir o texto 
" você tem aulas!".Para qualquer outro caso, você deve imprimir "você não tem aulas". */

/* Lembre - se de que a opção case permite agrupar casos e que cada caso precisa de uma pausa. */


let dia = "sabado";

function fimDeSemana(dia) {
    switch (dia) {
        case 'segunda':
            console.log(" você tem aulas!");
            break;
        case 'quarta':
            console.log(" você tem aulas!");
            break;
        case 'sexta-feira':
            console.log(" você tem aulas!");
            break;

        default:
            console.log("você não tem aulas");
    }
}