/* Exercício: Listen
Agora, execute o método necessário para por o servidor escutando a porta 3000 no domínio "localhost"
Você deve usar o método listen do objeto http */

const http = require('http');

http.createServer((req, res) => {
    console.log("Instanciando um servidor");
}).listen(3000, 'localhost');