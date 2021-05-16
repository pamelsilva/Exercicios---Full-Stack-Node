/* Exercício: Limitando número de registros consultados

Quando devolvemos ao usuário uma lista de registros é aconselhável que os resultados sejam paginados,
para trazer tanta informação junta da base de dados.

Neste exercício, temos a função findAll aplicado ao model Produto.


O objetivo da vez é passar um parâmetro para o método findAll para executar um limit e trazer apenas
os 5 primeiros produtos.
O método findAll espera receber um JSON como parâmetro.
O JSON deve ter uma chave chamada limit e cujo valor seja a quantidade de registros que queremos trazer
da base de dados: { limit: 5 } */

const Produto = require('model/produtos.js');

Produto.findAll({
    limit: 5
}).then(produtos => {
    console.log(produtos)
});