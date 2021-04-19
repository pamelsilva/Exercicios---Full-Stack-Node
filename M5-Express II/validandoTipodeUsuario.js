/* Validando Tipo de Usuário
Neste exercício, temos um controller e precisaremos validar se uma variável é definida na sessão. 
Se esta variável for encontrada, execute o código normalmente, mas se não for, redirecione para a página
de login.

Para fazermos isto, precisamoscriar um IF (condição) para verificar se o atributo admin existe dentro da sessão.
Se assim for, nós executamos o código normalmente.

Caso não, redirecionaremos o usuário e para isso a condição que será criada precisa também de um ELSE.

Para saber se o atributo admin existe dentro da sessão podemos preguntar para o sistema: if (session.admin)
Lembre-se que para redirecionar você deve usar o método redirect do objeto response. */

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({ secret: "frase secreta" }));

const admin = (req, res) => {
if(req.session.admin){

}
else {res.redirect('/login')}
};