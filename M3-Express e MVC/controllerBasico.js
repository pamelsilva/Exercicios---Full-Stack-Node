/* Exercício: Controller Básico

Começa um novo e lindo dia e chega um novo pedido do cliente.Você está trabalhando num controller de
um carrinho de compras de um e - commerce.Te pediram para que, quando um cliente adicionasse um 
produto ao carrinho, ele retorna - se uma mensagem 'Item Adicionado'.


O líder técnico em sua área informa que, para atender a esse requisito, você deve modificar 
a função addItem para receber os parâmetros req e res.Dito isto, o líder técnico se afasta misteriosamente,
dizendo que você deve analisar como retornar a mensagem 'Item Adicionado'utilizando os dois parâmetros: 
req e res.

Lembre que você precisa utilzar objeto res para retornar uma resposta para o usuário. */


let CarrinhoController = {
    removeItem: function() {},
    getItem: function() {},
    addItem: function(req, res) {
        res.send('Item Adicionado');
    }
};
module.exports = CarrinhoController;