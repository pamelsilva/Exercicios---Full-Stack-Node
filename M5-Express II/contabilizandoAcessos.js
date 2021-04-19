/* Contabilizando Acessos
Vamos imaginar que temos um controller chamado "estatisticasController" que tem um método "contarAcesso".
Este método recebe um request e adiciona, em nossa base de dados, um novo acesso à url do request.

Gostaríamos de contar os acessos do nosso site, mas não de todas as urls. Por exemplo, não queremos contar 
as visitas à rotas acessadas por post e algumas rotas get, como login e painel de usuário.

Nosso objetivo será criar uma função chamada visitasMiddleware que recebe como parâmetros req, res e next.
Dentro desta função vamos executar o método contarAcesso de estatisticasController, e vamos passar o objeto 
pedido como parâmetro para o método: estatisticasController.contarAcesso(req). 
No final da nossa função vamos executar o callback next().

Por fim, vamos adicionar nossa função "visitasMiddleware" como o segundo parâmetro da rota '/home' que já
está definida no código.

Podemos usar arrow functions para criar a nossa função visitasMiddleware. Por exemplo: visitasMiddleware 
visitas = (req, res, next) => { //seu código aqui }
Não se esqueça usar a função callback next no fim de visitasMiddleware.
Passe como segundo parâmetro da rota '/home' a função visitasMiddleware: router.get('/home', visitasMiddleware,
 homeController.index) */

 const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estatisticasController = require('../controllers/estatisticasController');

function visitasMiddleware (req, res, next){
estatisticasController.contarAcesso(req)
next();
}

router.get('/home', visitasMiddleware, homeController.index);