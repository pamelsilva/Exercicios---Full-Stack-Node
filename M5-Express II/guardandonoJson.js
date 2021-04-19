/* Exercício: Guardando em um JSON
No site a seguir, configuramos a rota para criar produtos. A rota é "/criar-produto" do tipo POST. 
Também já temos um produto predefinido, mas com atributos nome e preço nulos.

Teremos que receber as informações fornecidas pelo POST, definir os atributos do produto (nome e preço) e, 
finalmente, salvá-las em um arquivo chamado "produto.json".

Para receber os dados enviados por POST você precisa utilizar o atributo body do objeto request: req.body;
Não se esqueça de converter o JSON para texto usando JSON.stringify().
Para criar um arquivo você deve utilizar o método writeFileSync do módulo fs
O método writeFileSync recebe como primeiro parâmetro o nome do arquivo e como segundo parâmetro o conteúdo */

const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();

var produto = {
    nome: null,
    preco: null,
};


router.post('/criar-produto', (req, res) => {
produto.nome=req.body.nome
produto.preco=req.body.preco
const produtoJSON=JSON.stringify(produto);
fs.writeFileSync('produto.json',produtoJSON);
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.listen(3000);