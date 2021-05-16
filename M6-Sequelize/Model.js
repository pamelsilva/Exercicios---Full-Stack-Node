/* Criando um model
Nossa base de dados possui uma tabela chamada usuarios que possui três colunas: nome, email e senha
(todas do tipo string).

O objetivo deste exercício é ser capaz de criar um model associado à tabela de usuários.

Para criar nosso model vamos utilizar o método definir do objeto sequelize.Este método espera dois parâmetros: 
o primeiro é o nome da tabela 
e o segundo um JSON, cujas chaves são os nomes das colunas e os valores o tipo de dados.
O primeiro parâmetro do método define é uma string com o nome de la tabela: 'usuarios'
O segundo parâmetro é um JSON com a configuração das colunas
Dado que nossa tabela tem tres colunas nosso JSON deve ter tres chaves: nome, email e senha.
Todas as colunas são do tipo string, para indicar isso em nosso JSON vamos passar como valor de cada uma
de nossas chaves o seguinte: Sequelize: STRING */

const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
});
module.exports = Usuario;