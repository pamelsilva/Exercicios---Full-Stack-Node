/* Exercício - Listar
Vamos listar todas as séries!

Temos uma lista de muitas séries armazenadas na variável series.O seu trabalho será criar um 
caminho que aponte para o endereço "/series" e devolva todas elas.

Usando o método GET podemos solicitar informações de um servidor.Note também que a variável 
séries já está declarada.
 */

const express = require('express');
const app = express();

app.get('/series', function(req, res) {
    res.send(series)
});