/* Exercício: join
Se juntarmos tudo, tudo fará sentido!

    Temos um array com palavras soltas que, juntas, formam uma grande frase.

Queremos que, utilizando um método de array em arrayFrase, o converta em uma frase inteira.Queremos também que armazene essa oração em uma variável do tipo String chamada fraseNova.

    Exemplo:

    console.log(fraseNova); // "Não fracassei, simplesmente encontrei dez mil soluções equivocadas" 
    Documentação Join: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/

let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]
let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);