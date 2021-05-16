/* Usando método query

Usando o método de consulta do Sequilize execute a seguinte query: "SELECT * FROM users".


Lembre - se que o método de consulta é assíncrono e retorna uma promise(promessa).Portanto, após
executar o método de consulta você precisa concatenar o método then e então recuperar a resposta.
Dentro do método faça um console.log do resultado retornado.


    Finalmente, adicione o método de capturas de erros.Dentro do método de captura ele faça um console.log.
    Você deve usar o método query do objeto sequelize: sequelize.query
    Você deve passar como parâmetro do método query da consulta sql: sequelize.query("SELECT * FROM users")
    Lembre - se de concatenar os métodos then e catch ao final do método query: sequelize.query("...").then().catch() */

const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

sequelize.query("SELECT * FROM users").then(resultado => console.log(resultado)).catch(error => console.log(error))