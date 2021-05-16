/* Exercício: Atualizando o preço

Em nossa base temos um produto chamado "Smartphone x5 MEGA PRO".O id dele é 1. 
Nosso objetivo aqui é atualizar seu preço para o valor de 899 devido a uma promoção.

Para esse desafio iremos usar um modelo já definido chamado Produto.Como vimos, o método update altera 
os dados em uma tabela.Este método, recebe como parâmetro dois objetos: o primeiro contendo as informações 
que iremos atualizar.O segundo com as condições para selecionarmos qual registro queremos alterar.
Você deve usar o método update do modelo produto: Produto.update(...)
Deve passar como primeiro parâmetro do método update um objeto que contenha o atributo preco com o valor 899.
Não se esqueça de usar o where para selecionar o produto com id 1. */

const Produto = require('model/Produto.js');
Produto.update({
    preco: 899
}, {
    where: { id: 1 }
});