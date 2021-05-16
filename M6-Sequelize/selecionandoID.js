/* Exercício: Selecionando pelo ID

A partir do model Filmes vamos recuperar o filme com a id 1.
O Sequelize nos oferece o método findByPk que recupera um elemento da base de acordo com sua chave primária.
Podemos usar este método a partir do nosso objeto Filmes.


Tenha em mente que este método é assíncrono, portanto será necessário trabalhar com promises.

Você deve usar o método findByPk do model Filmes: Filmes.findByPk()
O método findByPk espera como parámetro el id de la película a recuperar: Peliculas.findByPk(1)
O método findByPk espera receber como parâmetro o id do filme a ser recuperado: Filmes.findByPk(1)
Deve ser concatenado ao método findByPk o método then: Filmes.findByPk() then( //restante do código aqui)
O método then receberá um parâmetro com o resultado da função findByPk, você deve recuperar esse resultado 
e fazer um console.log: then(filme => console.log(filme) */

const Filmes = require('model/filmes.js');

Filmes.findByPk().then(filme => console.log(filme));