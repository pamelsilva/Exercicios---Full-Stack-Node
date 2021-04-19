/* Exercício: Parâmetros Compartilhados
Analisando o HTML  abaixo, escreva o código necessário no controller para que o mesmo possa enviar ao 
template engine as variáveis necessárias para poder executar o código.

Ah, o nome da nossa view é checkout.

Código HTML:

<% for(let i =0; i < itens.length; i++) {
    <li>
       <%= itens[i] %>
    </li>
 <% } %> */


 let produtos = ['Sorvete 250g', 'Bolacha de Chocolate', 'Maçã 500g'];
       let carrinhoController = {
         checkout: function (req,res){
             res.render("checkout",{itens:produtos});
         }
     }