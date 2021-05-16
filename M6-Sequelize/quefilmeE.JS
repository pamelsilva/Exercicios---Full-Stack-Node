/* Exercício: Que filme é esse ?

Nesse exemplo teremos um modelo Filme que tem já definida uma relação com o modelo gênero.

Queremos buscar o filme com id 1, e para isso podemos usar o método findByPk.É importante dizer que também 
queremos trazer o gênero do filme em nossos resultados.

Para conseguir isso, devemos passar como segundo parâmetro do método findByPk um objeto com o atributo
include.O atributo include será um array com a lista de todos os relacionamentos que queremos trazer 
associados ao filme, no nosso caso, apenas o relacionamento genero.

E para nosso desafio se concluir, você deverá dar um console.log no atributo que contem o nome do gênero:
filme.genero.nome
Você deve executar o método findByPk do modelo Filme, passando a ID 1 como o primeiro parâmetro: 
Filme.findByPk(1)
O segundo parâmetro do findByPk é um objeto com o atributo include
O atributo include é uma matriz com a lista de todos os relacionamentos: 
Filme.findByPk(1, { include: ['genero'] }) */

const Filme = require('model/Filme.js');

Filme.findByPk(1, { include: ['genero'] }).then(filme => console.log(filme.genero.nome));