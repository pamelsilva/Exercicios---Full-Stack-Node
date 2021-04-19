/* Validação de erros
Neste exercício, temos um controlador com um método de login. Devemos reformular este método, adicionando um 
IF (condição) para verificar se há erros de validação. No caso de haver erros, devemos redirecionar o usuário
à tela de login com os erros encontrados. 

Para fazer isso, precisaremos criar uma constante chamada erros e vamos atribuí-la à execução da função de 
validationResult.

Então em um IF chamaremos o método isEmpty do objeto erros.

Caso o método retorne false (saberemos que não está vazio porque contém erros), devemos retornar a visualização
de login com os erros.

Para retornar a visualização de login você deve usar o método render do objeto response. Lembre-se que para 
recuperar os erros você deve usar o método array do objeto erros.

Executar a função resultadoValidacao e guardar o resultado nas constante errors: 
const errors = validationResult(req);
Dentro de um if valide se o array de erros não está vazio: !errors.isEmpty()
Se o array de erros não estiver vazio, responda com a visualização do login com os erros encontrados:
 res.render('login', {errors: errors.array()}) */

const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const erros = validationResult(req);
    //Verifique se há erros aqui e redirecione caso haja erros

resultadoValidacao:(req,res)=>{
const errors = validationResult(req);
if(errors.isEmpty()){
return res.render('login', {errors: errors.array()})
}

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}