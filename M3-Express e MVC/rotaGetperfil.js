/* Exercício - Rota get perfil
Vamos no seu perfil...

Queremos que você crie uma rota que utilize o método get e aponte para "/perfil".
Deve retornar a variável boasVindas que lhe entregaremos declarada.

Exercício - Rota get perfil
Vamos no seu perfil...

Não se esqueça de usar o método send() para enviar os dados para o browser.Lembre - se 
que o método get recebe dois parâmetros: uma solicitação e uma resposta. */


const express = require('express');
const app = express();

let boasVindas = "Bem vindo/a, aqui estamos em seu perfil"

app.listen(8000, () => console.log('Servidor executando'));
app.get("/perfil", (req, res) => {
    res.send(boasVindas);
})