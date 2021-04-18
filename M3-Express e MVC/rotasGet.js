/* Exercício - Rota get home
Vamos explorar os diferentes métodos de requisição que podemos usar com o módulo Express.

Seu trabalho será, utilizando o método GET, criar uma rota para "/home"
que devolva a frase "Olá, estamos na página home".

Não se esqueça de usar o método send() para enviar os dados para o navegador.
Lembre - se também que o método GET recebe dois parâmetros: uma solicitação e uma resposta. */


const express = require('express');
const app = express();
app.listen(8000, () => console.log('Servidor executando'));
app.get("/home", (req, res) => {
    res.send("Olá, estamos na página home");
})