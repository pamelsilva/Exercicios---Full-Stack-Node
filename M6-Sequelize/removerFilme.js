/* Exercício: Remover Filme

Da mesma maneira que inserimos e atualizamos dados em nosso banco de dados, o Sequelize também nos permite 
excluir registros.Para esta tarefa, o método destroy pode ser utilizado em qualquer um dos nossos modelos.
Este método espera como parâmetro um objeto com uma query do tipo where que permita identificar a linha a 
ser excluída.

O objetivo deste exercício é remover o filme com um ID igual a 3.
Você deve usar o método destroy do model Filme.Algo como Filme.destroy(...)
Você deve passar como parâmetro o método destroy um json com uma query que contenha uma condilçai where.
Algo como Filme.destroy({ where: ... })
Você deve definir o where de modo que ele encontre o filme de id 3. Algo como Filme.destroy
({ where: { id: 3 } }) */

const Filme = require('model/filme.js')

Filme.destroy({
    where: { id: 3 }

});