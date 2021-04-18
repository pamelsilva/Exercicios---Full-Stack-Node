/* Exercício - usando rotas
A partir do arquivo index.js queremos acessar o arquivo series.js.
Seu trabalho será solicitar esse módulo e armazená - lo na variável rotasSeries.Finalmente,
queremos que esse módulo se encarregue de tratar de todos as solicitações que venham de séries.

Antes de começarmos...Tenha em mente que estamos lidando com um sistema de rotas e organização
de diretórios é MUITO importante, portanto o arquivo series.js é armazenado na pasta de routes.
Você precisará utilizar o método use(). */

const express = require('express');
const app = express();

const rotasSeries = require('./routes/series');

app.use('/series', rotasSeries);