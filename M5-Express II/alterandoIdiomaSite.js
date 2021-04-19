/* Alterando o Idioma de um Site
Neste exercício temos um controller que irá salvar na sessão o idioma de preferência do usuário. 
Mais tarde podemos usar esta variável de sessão para exibir o conteúdo no idioma selecionado.

Para fazer isso, dentro do controlador vamos salvar o valor do parâmetro idioma que recebemos por get 
dentro do atributo idioma do objeto session. Lembre-se que para salvar informações dentro deste objeto, 
precisado do request: req.session.

Para obter a informação do idioma enviado pelo usuário, nós fazemos uma consulta através do objeto
query: req.query.idioma


Dentro do método do controller, o atributo idioma é definido dentro da sessão: req.session.idioma
O valor do atributo idioma deve ser o que obtermos por ge: req.query.idioma */


const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const alterarIdioma = (req, res) => {

req.session.idioma=req.query.idioma

	res.redirect('/');
}