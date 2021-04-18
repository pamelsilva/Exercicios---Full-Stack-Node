/* Exercício: modularizar rotas
Vamos algumas rotas:

    Queremos que o arquivo series.js administre TODOS os request do recurso.Pedimos que, 
    como primeiro passo, crie a variável express e armazene nela o módulo express.

    Então, você deve criar a variável router e armazenar nela a execução do método que nos 
    permite gerenciar um sistema de rotas.
    Precisará usar o método Router() */

const express = require('express');
const router = express.Router();