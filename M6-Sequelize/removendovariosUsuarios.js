/* Exercício: Removendo Vários Usuários
O método destroy permite, como o select, passar outros operandos para a consulta.Em vez de usar uma comparação
de operador igual(a comparação padrão), podemos usar um like.

Neste exemplo, removeremos todos os usuários cujo provedor de email é aol.com.Ou seja, aqueles cujo email 
termina em "aol.com".

Para isso, vamos executar o método de destruição do model Usuario.Dentro do where(no método destroy),
vamos passar um objeto com o nome da coluna e cujo valor é um novo JSON com a seguinte sintaxe: email:
 {[Op.like]: '%aol.com'}
Você deve usar o método destroy do model Usuário.Algo como Usuário.destroy(...)
Você deve passar como parâmetro para o método destroy um JSON com uma consulta que contenha uma condição where.
Algo como Usuario.destroy({ where: ... })
O JSON dentro do where vai ter como chave o nome da coluna pela qual queremos buscar e como valor a expressão 
para o like: algo como { where: { email: {[Op.like]: '%aol.com' } } */

const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({ where: { email: {
            [Op.like]: '%aol.com' } } });