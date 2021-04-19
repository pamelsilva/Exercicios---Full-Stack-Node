/* Configurando uma Sessão
Agora vamos trabalhar com sessões.

A sessão é usada para armazenar informações sobre o usuário, independentemente se o usuário mudar de url. 
Mas antes de podermos usar a sessão, precisamos de fazer uma pequena configuração.


Neste exercício você terá que fazer um require de "express-session" e guardá-la na constante session.

Desta forma, você precisa inicializar o middleware session: session({secret: "frase secreta"})

É necessário executar o método use do objeto app. Por exemplo: app.use();
Dentro do método use precisa inserir a configuração correspondente: session({secret: "frase secreta"}) */

const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({secret: "frase secreta"}));
