/* Exercício: Substituição rápida
Sua missão agora é criar uma função chamada "substituicaoRapida"
que você recebe um texto, uma palavra para procurar e a palavra que substituirá a que você está procurando.
A função deve retornar o texto com a palavra substituída.

Exemplo:

    let textoNovo = substituicaoRapida('Boa tarde', 'tarde', 'noite');
console.log(textoNovo) //'Boa noite' */


function substituicaoRapida(texto, antigo, novo) {
    return texto.replace(antigo, novo);
}
let textoNovo = substituicaoRapida('Boa tarde', 'tarde', 'noite');
console.log(textoNovo);