/* Exercício: Exerpimentando o método readFileSync
O módulo File System vem com uma funcionalidade que nos permitirá ler documentos facilmente.

O método readFileSync recebe como parâmetro o nome do arquivo que precisamos ler e retorna uma string 
com seu conteúdo. Ele também recebe um segundo parâmetro indicando que o encoding que deve ser usado para ler 
e retornar o conteúdo do arquivo. Este parâmetro é um objeto literal com o seguinte formato: {encoding: 'utf-8'}


Vamos testar como o readFileSync funciona lendo o conteúdo do arquivo "tarefas.txt".

Salve o conteúdo do arquivo "tarefas.txt" em uma constante chamada "tarefas" e, finalmente, execute um
console.log para exibir o conteúdo pelo console.

Para ler um arquivo você deve usar o método readFileSync do módulo fs
O método readFileSync recebe como parâmetros o nome do arquivo que será lido e um json para indicar o encoding
Não se esqueça de guardar o conteúdo do arquivo na constante tarefas e em seguida exibir seu conteúdo por 
console.log */

const fs = require('fs');
const tarefas =fs.readFileSync('tarefas.txt',{encoding: 'utf-8'});

console.log(tarefas);