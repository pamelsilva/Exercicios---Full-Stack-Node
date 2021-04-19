/* Exercício: Usando o método dirname
Na constante logo temos armazenada a rota completa para uma imagem.

Temos que declarar uma constante chamada diretorio e atribuir o caminho definido na constante logo,
sem o nome do arquivo.

Para isso, vamos usar o método dirname do módulo path.

Você precisa utilizar o método dirname do módulo path: path.dirname();
Você precisa passar como parâmetro do dirname a constante logo. */

const path = require('path');
const logo = '/assets/images/logo.png';
const diretorio = path.dirname(logo);