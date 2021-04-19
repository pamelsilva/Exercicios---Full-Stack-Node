/* Definir Cookie
Os cookies são super fáceis de usar. Para praticarmos, neste exercício precisamos salvarem um cookie o atributo
 "ultimoAcesso" com o valor da data atual.

O propósito disso é saber, quando o usuário acessar no nosso site novamente, quanto tempo se passou desde 
a última visita.

Para isso, dentro do controller vamos usar o método cookie do objeto response. 
Este método espera como primeiro parâmetro o nome do cookie, neste caso "ultimoAcesso".
 O segundo parâmetro será a data de acesso, isto podemos obter aplicando new Date().
Você precisa usar o método cookie do objeto response: res.cookie();
O primeiro parâmetro do método cookie é o nome dele e o segundo o valor a ser armazenado:
 res.cookie('ultimoAcesso', new Date());  */

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
res.cookie('ultimoAcesso', new Date());
 }