/* Exercício: Assegurando a compatibilidade com PUT e DELETE
Agora vamos trabalhar com rotas do tipo PUT e DELETE. Lembre-se que as URL do tipo PUT são utilizadas 
somente para modificar informações enquanto as rotas do tipo DELETE são utilizadas para eliminar registros. 
Dado que esses métodos não são suportados por todos os navegadores é necessário usar a dependência 
method-override para assegurar a compatiblidade. Para tal, nesse exercício, você vai criar a constante
methodOverride que vai requisitar o módulo "method-override" e em seguida configurar o objeto app passando 
ao mesmo o método use e a expressão methodOverride("_method").

Dica: Lembre-se que quando está trabalhando no seu projeto a dependência method-override não vêm por 
padrão no node, vai ser necessário que a instale executando o seguinte comando no terminal: 
npm install method-override --save

Você precisa criar uma constante methodOverride e atribuir a mesma o require de "method-override"
Você tem que executar o método use do objeto app. Ex: app.use()
Dentro do método use é necessário passar a configuração correspondente: methodOverride("_method") */


const express = require('express');
const app = express();
const methodOverride=require("method-override");
app.use(methodOverride("_method"));