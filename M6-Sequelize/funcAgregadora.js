/* Exercício: Função agregadora - max

Sequelize nos permite iterar com nossos modelos utilizando as mesmas funções de agregação que já 
conhecemos do MySQL, tais como: max, min, count, sum, etc.

Neste exercício precisamos recuperar do banco de dados o preço cujo valor é o mais alto entre todos 
os preços dos nossos produtos.
Para isso, podemos utilizar o método max no nosso model Produto.


***Lembre - se que o método máximo espera receber o nome da coluna.

Assim, ele irá recuperar o resultado dentro do método then e mostrá - lo com um console log: 
then(maiorPreco => { console.log(maiorPreco) })

Precisa utilizar o método max no modelo Produto: Produto.max()
O método ax espera receber o nome da coluna: Produto.max('preco')
Precisaremos concatenar o método then: Produto.max('preco').then(...) */

const Produto = require('model/produtos.js');

Produto.max('preco').then(maiorPreco => { console.log(maiorPreco) })