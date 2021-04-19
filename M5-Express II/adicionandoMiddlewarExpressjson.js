/* Exercício: Adicionando o middleware "express.json()"
Os middleware nos dão a possibilidade de executar código antes de executar o código para uma rota específica. 
Isto nos permite, por exemplo, analisar e estruturar o request para em seguida passa-lo as rotas.

Um exemplo disto é o middleware json do express: "express.json()". Este middleware injeta os parâmetros
 enviados dentro do objeto body e os converte em um json. Não é exagero dizer que sem este middleware não
  teríamos acesso em nossas rotas ao body do resquest.

Nese exemplo temos uma rota que recebe um post e faz um console.log do req.body, mas neste exemplo não 
declaramos o middleware.

O objetivo é adicionar o middleware "express.json()", através do método use de app, para permitir que a
 rota possa fazer uso do body do request.

Para adicionar um middleware você pode utilizar o método use de app: app.use()
Você deve passar como parâmetro de app.use() o middleware: "express.json" */


const express = require('express');
const app = express();

app.use(express.json());

const router = express.Router();
router.post('/criar-produto', (req, res) => {
	console.log(req.body);

	res.send('O produto foi criado com sucesso');
});

app.use(router);

app.listen(3000);