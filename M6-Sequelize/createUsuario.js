/* Exercício: Criando um usuário

Suponha que tenhamos um model de Sequelize chamado Usuário.Este model possui três atributos: 
nome, email, senha, todos eles do tipo string.

O que devemos fazer é, a partir desse model, inserir um usuário no banco de dados indicando um 
valor para cada atributo.


Para resolver isso, lembre - se de que você deve usar o método create do seu model.
    Você deve usar o método create do model de usuário: User.create(...)
    Você deve passar como parâmetro do método create um objeto que possui como atributo nome, email, 
    senha e cujos valores de atributo são aqueles que você deseja inserir na base. */

const Usuario = require('model/usuario.js');

Usuario.create({
    nome: "Pâmela",
    email: 'pamela@gmail.com',
    senha: '123'
});