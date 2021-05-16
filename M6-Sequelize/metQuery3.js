/* Método query III
Dentro do filmeController temos o método de deletar.Este método espera por uma identificação e remove o filme correspondente da base.

Para resolver o exercício será necessário executar dentro do método query algo como: "DELETE FROM filmes WHERE id = " + req.params.id

Para finalizar, dentro do método envie então a mensagem "Produto excluído com sucesso"
e
dentro do método de captura a mensagem "Erro ao excluir o produto".
Use o método query do objeto sequelize: sequelize.query
Deve passar como parâmetro do método query a consulta sql: sequelize.query("DELETE FROM filmes WHERE id = " + req.params.id)
Concatenar o método then ao final do méotdo query: sequelize.query("...").then()
Dentro do método then enviar a mensagem, "Produto deletado com sucesso": then(() => req.send("Produto deletado com sucesso"))
Dentro do método then deve concatenar o método
catch:
sequelize.query("...").then().catch
Dentro do método
catch
envie a mensagem "Erro ao deletar um produto":
catch (() => req.send("Erro ao deletar um produto"))
Não se esqueça de colocar o WHERE no DELETE FROM */

const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig);

const deletar = (req, res) => {
    sequelize.query("DELETE FROM filmes WHERE id = " + req.params.id).then(() => req.send("Produto deletado com sucesso")).catch(() => req.send("Erro ao deletar um produto"))
}