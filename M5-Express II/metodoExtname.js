/* Exercício: Usando o método extname
Nós armazenamos o nome de um arquivo na constante "movies".

Vamos criar uma nova constante chamada extension (extensão em inglês) e vamos atribuir a extensão do arquivo
que armazenamos em movies.

Para isso, vamos usar o método extname do path.

Você vai precisar usar o método extname do módulo path: path.extname();
Você precisa passar a constante "movies" como parâmetro do extname */

const path = require('path');
const movies = 'movies.json';
const extension = path.extname(movies);