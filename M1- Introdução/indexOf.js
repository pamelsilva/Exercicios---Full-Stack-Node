/* Exercício: Está falando de mim ?
    Para o próximo exercício, assumiremos que temos um texto que copiamos e queremos saber se o texto menciona
     uma palavra específica.
Para conseguir isso, você precisará criar uma função chamada menciona que receberá dois parâmetros: 
um texto que é onde vamos a buscar, e uma palavra que vamos a averiguar se é mencionada no texto.
A mesma função retorna true em caso de encontrar a palavra.
Exemplo:

menciona('Existem muitas linguagens de programação e javascript é uma delas', 'programação'); // true

Existe um método que podemos usar para encontrar um determinado elemento.Se o encontrar,
retornará o índice desse elemento;

caso contrário, retornará um - 1. */

function menciona(texto, busca) {
    let = texto
    if (texto.indexOf(busca) == -1) {
        return false
    } else {
        return true
    }
}