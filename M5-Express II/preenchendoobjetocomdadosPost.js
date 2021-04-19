/* Exercício: Preenchendo um objeto com dados do POST
Para este exercício temos um objeto já criado que tem dois atributos, ambos estão com valor null.
Nós vamos ter que indicar um valor para cada um de nossos atributos segundo os dados enviados por POST. 
Para isso vamos criar uma rota do tipo POST que aponte para "/criar/produto". 
Vai ser essa a rota que o usuário nos enviará os dados: nome e preço do produto. 
Nos vamos recuperar esses dados a partir do atributo body request e vamos adiciona-los ao nosso objeto produto. 
Uma vez finalizado enviaremos o objeto produto ao usuário usando o método send.


OBS: não usar desestruturação neste exercício

Para criar uma rota use o objeto router
O atributo body forma parte do objeto request: req.body
Para obeter um dado em particular do body podemos fazer: req.body.dado */

const express = require('express');
const router = express.Router();

let produto = {
    nome: null,
    preco: null
};

router.post("/criar/produto",(req,res)=>{;
produto.nome=req.body.nome
produto.preco=req.body.preco
res.send(produto)
});