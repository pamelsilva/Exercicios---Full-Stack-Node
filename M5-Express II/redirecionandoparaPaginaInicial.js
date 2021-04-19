/* Redirecionando para Página Inicial
Algumas rotas em nosso site foram descontinuadas e não temos mais conteúdo para exibir. 
Gostaríamos de garantir que quando um usuário tente entrar em qualquer uma dessas rotas, ele seja 
redirecionado para a página inicial.

Para isso vamos criar uma função chamada "redirecionar", que vai ser usada como middleware e 
deve receber três parâmetros: req, res e next.

Dentro da nossa função vamos chamar o método redirect do objeto response e vamos redirecioná-lo para 
a url '/'. Para este caso em particular, não é necessário chamarmos o callback next, já que a idéia deste 
redirecionamento é cortar a execução dos possíveis middlewares subsequentes.

Finalmente só temos que adicionar a função "redirecionar" como segundo parâmetro da rota '/rota-em-desuso'.

Podemos usar arrow functions para criar a nossa função de redirecionamento. 
Por exemplo: const redirecionar = (req, res, next) => { //seu código aqui }
Passe como segundo parâmetro da rota '/rota-em-desuso' a função de redirecionamento: 
router.get('/rota-em-desuso', redirecionar, OldController.index) */

const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

const redirecionar = (req, res, next) => { 
 res.redirect("/")
 }
 router.get('/rota-em-desuso', redirecionar, OldController.index)