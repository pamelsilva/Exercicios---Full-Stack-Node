/* Exercício: Lendo o JSON de forma síncrona
Temos um filme armazenado no arquivo filme.json.

Usando readFileSync armazene o conteúdo de filme.json em uma variável chamada filme.

Converta o valor da variável filme em um json usando JSON.parse

Por fim faça um console.log para mostrar somente o atributo titulo do filme.

Para ler um arquivo é necessário utilizar o método readFileSync do módulo fs
O método readFileSync recebe como parâmetro o nome do arquivo a ser lido e o json para indicar o encoding.
Armazene o conteúdo da arquivo filme.json na variável filme
Converta o valor da variável filme em um objeto: filme = JSON.parse(filme);
Use console.log para mostrar o nome do filme. Lembre-se do nome do atributo. */


const fs = require('fs');

let filme = fs.readFileSync('filme.json', {encoding: 'utf-8'});
filme = JSON.parse(filme);
console.log(filme.titulo);