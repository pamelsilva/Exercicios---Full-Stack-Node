/* Exercício - Rota get produto
Para começar, queremos que você crie a variável produto.Ela deve armazenar um objeto com as seguintes 
propriedades: tipoProduto, preço, quantidade, onde cada uma delas deve ter o valor null, já que, no momento,
não temos nenhum dado.

Por último, queremos que você crie uma rota que utilize o método get e aponte para a rota
 "/produto/adicionar".Isto deve retornar a variável do produto que você criou.


Gostaríamos de enviar um produto vazio ao usuário...

Não se esqueça de usar o método send() para enviar os dados para o browser(navegador web). */

const express = require('express');
const app = express();

let produto = {
    tipoProduto: null,
    preco: null,
    quantidade: null
}
app.listen(8000, () => console.log('Servidor executando'));
app.get("/produto/adicionar", (req, res) => {
    res.send(produto);
})