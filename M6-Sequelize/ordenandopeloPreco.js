/* Exercício: Produtos ordenados pelo preço

Neste exercício o objetivo será trazer todos os produtos ordenados por preço, do menor para o maior.

Lembre - se que dentro do método findAll você pode passar um JSON que tenha como chave a palavra order e 
cujo valor é um array de array indicando em qual coluna ou colunas iremos ordenar e qual tipo de ordenação terá:
ASC ou DESC.
    O método findAll espera receber um array como parâmetro.
O JSON deve ter uma chave chamada order e que tenha como valor um array: { order: [...] }
Dentro do array podemos ter um ou mais arrays, uma para cada coluna que vamos ordenar.
Na primeira posição deve ir o nome da coluna e na segunda o tipo de ordem: 
{ order: [['preco', 'ASC']]} */

const Producto = require('model/produtos.js');

Producto.findAll({
    order: [
        ['preco', 'ASC']
    ]
}).then(produtos => {
    console.log(produtos)
});