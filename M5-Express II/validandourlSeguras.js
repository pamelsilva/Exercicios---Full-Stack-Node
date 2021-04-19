/* Validando se a url é segura
Temos um formulário de upload onde os usuários podem fazer enviar seus sites favoritos para que outros usuários
possam ver. Neste formulário nós recebemos o input url com o endereço do site. Queremos validar sea URL que 
chega até nós é segura, ou seja, https. Para conseguir isso, vamos criar a nossa regra de verificação
personalizada.

Usando a função body valide o input url. Lembre-se também de concatenar à execução de body o método custom 
para fazer sua validação.

Este método recebe uma função com um parâmetro value (que será o valor recebido pelo input url).

Usando indexOf podemos validar se a url é do tipo https.
Lembre-se que a função que recebe o método custom deve retornar true ou false.

Dica: para saber se a url de entrada é do tipo https você pode fazer value.indexOf('https') !== -1

Adicione como segundo parâmetro da rota um array: router.post('/favorites', [], favoritosController.save);
Dentro do array você precisa executar a função body concatenando o método custom: check('url').custom()
O método custom recebe uma função, que espera por um parâmetro. Este parâmetro terá o valor contido no input
 e podemos usá-lo dentro da mesma função para verificar se ele tem ou não https: value.indexOf('https') !== -1.
 */

/*  ***falta fazer */

const express = require('express');
const router = express.Router();
const favoritosController = require('../controllers/favoritosController');
const { validationResult, body } = require('express-validator');

router.post('/favoritos',[
body("url").custom(function(value){
custom( value => value.indexOf('https') !== -1 )
,  favoritosController.salvar