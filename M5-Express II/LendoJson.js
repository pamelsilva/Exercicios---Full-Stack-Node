/* Exercício: Lendo o JSON
Temos um arquivo chamado produtos.json que possui um bloco de texto com um json de produtos.

Usando readFileSync armazene o conteúdo de produtos.json em uma constante chamada produtos e mostre-a com
um console.log

Não se esqueça de que o json dentro do arquivo está em formato de  bloco de texto, portanto pode ser 
necessário utilizar JSON.parse para convertê-lo em objeto.
Para ler um arquivo é necessário utilizar o método readFileSync do módulo fs
O método readFileSync recebe como parâmetros o nome do arquivo a ser lido e json para indicar o encoding.
Não se esqueça de guardar o conteúdo do arquivo na constante produtos e logo em seguida mostrar o seu valor 
com um console.log
Use JSON.parse para converter o conteúdo do arquivo em um objeto. */


const fs = require('fs');
const produtos = fs.readFileSync('produtos.json', {encoding: 'utf-8'});
console.log(JSON.parse(produtos))