/* Validando Campos de Cadastro
Nós já temos a nossa rota de registo. O que precisamos fazer agora é adicionar uma validação para que o campo
de e-mail seja do tipo email e a senha tenha pelo menos 6 caracteres. 

Para conseguir isso, vamos requerer o módulo de express-validator e usando o destructuring vamos inicializar 
três constantes: check, validationResult e body.

Em nossa rota, vamos adicionar como segundo parâmetro um array. Ele terá apenas duas posições, uma para validar
a entrada de dados no input "email" e outra para validar a entrada em "password".

Em cada posição do array vamos usar a função check passando como parâmetro o input a ser validado e vamos 
concatenar à execução desta função uma segunda função que será a regra que queremos que nosso input atenda, 
por exemplo é isEmail.

Para requerer as propriedades que precisamos do express-validator pode usar o operador de destruturação: 
{check, validationResult, body} = require('express-validator')
Você tem que adicionar como segundo parâmetro da rota um array: router.post('/cadastro', [], 
UserController.register);
Dentro do array você tem que executar a função de verificação concatenada à regra a ser usada, para validarmos 
a entrada de dado do input: check('inputName').isLength()
 */

const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const { check, validationResult, body } = require('express-validator');
router.post('/cadastro', [
    check('email').isEmail(),
    check('password').isLength({min: 6}),
],  UsuarioController.registro);