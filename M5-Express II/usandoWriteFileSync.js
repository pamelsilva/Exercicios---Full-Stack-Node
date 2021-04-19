/* Exercício: Usando writeFileSync
A função writeFileSync que vem no pacote File System nos permitirá criar documentos em nosso projeto.

Vamos testar sua funcionalidade criando um documento chamado "bemvindo.txt" para o qual passaremos o 
texto "Hello World".

Para criar um arquivo precisamos usar o método writeFileSync do módulo fs;
O método writeFileSync recebe como primeiro parâmetro o nome do arquivo e o conteúdo como segundo.
 */

const fs = require('fs');
fs.writeFileSync("bemvindo.txt","Hello World");