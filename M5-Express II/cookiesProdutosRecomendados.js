/* Produtos Recomendados
Anteriormente no sistema contido deste exercício, era armazenado no navegador do usuário um cookie chamado
"preferências". Agora, a partir do controller, queremos mostrar uma lista de produtos recomendados de acordo 
com as preferências do usuário.

Para atingir este objetivo, vamos recuperar o valor do cookie "preferências" e armazená-lo numa constante 
chamada também de "preferências".

A partir do valor recuperado traremos todos os produtos de listaDeProdutos cuja key corresponde a este valor. 
Nós armazenamos os produtos em uma constante chamada "produtos".

E por fim, passamos ao método render a constante produtos, chamando a view "recomendados".

Para recuperar o valor das preferências do cookie, você deve utilizar o objeto request: req.cookies.preferencias
Não se esqueça de guardar o valor do cookie dentro de uma constante: const preferencias=req.cookies.preferencias
Para recuperar os produtos associados à preferência, você pode fazer: listaDeProdutos [preferencias].
Não se esqueça de guardar os produtos dentro de uma constante: const produtos= listaDeProdutos [preferencias]
Para devolver os produtos use o método render do objeto response: res.render('/recomendados', {produtos: produtos})
 */

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listaDeProdutos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	camisetas: [
		"camisa de retalhos",
		"camisa bordada",
	]
}

const recomendados = (req, res) => {
const preferencias=req.cookies.preferencias
const produtos= listaDeProdutos [preferencias]
res.render('/recomendados', {produtos: produtos})
}