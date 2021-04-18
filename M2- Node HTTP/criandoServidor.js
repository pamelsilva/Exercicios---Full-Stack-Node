/* ExerciseProgressIcon
Exercício: Criando Servidor
Queremos que você execute o método necessário para criar o nosso servidor.

Este método recebe um callback.Faça que o mesmo imprima no console a frase "Instanciando um servidor"
https://www.w3schools.com/nodejs/met_http_createserver.asp */

const http = require('http');

http.createServer((req, res) => {
    console.log("Instanciando um servidor");
});