/* Exercício: Remover Usuário
Da mesma maneira que um registro pode ser excluído por seu ID, o mesmo pode ser feito para alguma outra coluna
que identifique exclusivamente o elemento.

Neste exercício, excluiremos um usuário com base no seu email.O objetivo é eliminar o usuário cujo email é 
igual a "kenny@south-park.com"

Para isso, usaremos o método destroy do model Usuario, passando como parâmetro uma consulta que faz um where
pelo email.
Você deve usar usar o método destroy do model Usuario.Algo como Usuario.destroy(...)
Você deve passar como parâmetro para o método destroy um objeto com uma consulta que contenha uma condição 
where.Algo como Usuario.destroy({ where: ... })
Você deve buscar com a condição where o usuário que tem email igual a "kenny@south-park.com".
Algo como Usuario.destroy
({ where: { email: "kenny@south-park.com" } }) */

const Usuario = require('model/usuario.js');
Usuario.destroy({ where: { email: "kenny@south-park.com" } });