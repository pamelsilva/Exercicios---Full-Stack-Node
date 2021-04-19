/* Preferências do Usuário
Neste exercício, nosso site pode ser exibido em diferentes estilos css. 
O estilo padrão é mostrado na tela como "default", mas damos a possibilidade ao usuário de alterá-lo. 
Não apenas alterá-lo, como também guardamos a escolha deles em um cookie chamado estilo.

No controller do projeto vamos reenderizar uma visualização. Nosso objetivo é descobrir se há algum atributo 
estilo dentro do objeto cookie. Se houver, vamos passar para a visualização o estilo já salvo, se não, passamos
o "default".

Para conseguir isso, utilize um condicional IF para verificar se existe um atributo de estilo dentro do cookie.
Se sim, dentro do atributo if definimos uma variável chamada estilo com o valor armazenado no cookie. 
Caso contrário, em ELSE, defina a variável estilo com o valor "default".

Para descobrir se existe um valor armazenado no cookie para o atributo estilo você utilizar: 
if (req.cookies.estilo)
Não se esqueça de passar a informação para a view: res.render('/', {estilo: estilo}); */


var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
let estilo;

if (req.cookies.estilo){
estilo=req.cookies.estilo;
}
else(estilo= "default")

	res.render('/', {estilo: estilo});
}
