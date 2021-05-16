/* Utilizando método query novamente
Temos nosso produtoController que cuida das operações relacionadas aos produtos(listar todos, carregar produtos, etc).

O que nós queremos fazer é adicionar a lógica para o método de exibição.Este método recebe uma identificação do produto(id) e deve retornar o produto cuja identificação
corresponda ao banco de dados.Finalmente, usando o método de envio do objeto de resposta, devemos devolvê - lo.

Para encontrar o produto em nossa base de dados podemos usar o método de consulta do objeto Sequelize e 
fazer uma consulta do tipo: "SELECT * FROM products where id = " + req.params.id.

Lembre - se que o resultado deve ser recuperado no método then.Será dentro deste método que você irá
executar o código res.send().

Deve usar o método query do objeto sequilize: sequelize.query
Deve passar como parâmetro do método query a consulta sql: sequelize.query("SELECT * FROM users WHERE id = " + 
req.params.id)
Não se esqueça de concatenar o método then ao final do méotdo query: sequelize.query("...").then()
O método recebe então como parâmetro o resultado da consulta.Você terá que retornar este resultado usando o
método de envio do objeto de resposta: res.send(resultado) */


const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const mostrar = (req, res) => {
    sequelize.query("SELECT * FROM products WHERE id = " + req.params.id).then(produto => res.send(produto))
}