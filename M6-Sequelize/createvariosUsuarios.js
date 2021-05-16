/* Exercício: Criando vários usuários
Em certas situações, precisamos fazer mais de um registro no banco de dados.
Embora possamos usar o método create várias vezes, a sequenciação facilita essa tarefa com o método bulkCreate.
Este método recebe um array, em que cada posição é um objeto com as mesmas características do objeto que o
método create recebe.Em outras palavras, o método bulkCreate é como o método create, mas com a vantagem de
permitir a inserção de vários registros ao mesmo tempo.

Neste exemplo, temos o model de filme.Nosso objetivo é inserir dois filmes usando o método bulkCreate.
Cada filme a ser inserido deve ter um título e um gênero(para os nomes dos atributos, use "titulo" e "genero"
sem acentos).

Você deve usar o método bulkCreate do model Filme: Filme.bulkCreate(...)
Você deve passar um array de objetos como um parâmetro para o método bulkCreate.
Cada objeto no array deve ter como atributo titulo e genero com os valores que você deseja inserir na base. */

const Filme = require('model/filme.js');

Filme.bulkCreate([{
    titulo: 'HSM',
    genero: 'drama'
}, {

    titulo: 'Camp Rock',
    genero: 'drama'
}]);