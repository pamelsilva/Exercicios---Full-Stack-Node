/* Exercício: Site em manutenção
Aproveitando a capacidade dos middleware, vamos criar um código que podemos informar se o site esta em
manutenção e mostra uma view personalizada informando o usuário, independente da rota que ele esteja acessando.

Neste exemplo temos criada uma variável chamada "emManutencao" configurada por padrão com o valor false.

Nós vamos ter que, usando o método use de app, criar uma função que avalia o valor da variável "emManutencao".
Se a variável tiver o valor false devemos executar a função next do middleware para que o fluxo da aplicação 
continue normalmente. Mas se a variável tiver o valor true vamos devolver a view 'em-manutencao',
usando o objeto response para isso.

Para adicionar um middleware utilize o método use do app: app.use()
O método use recebe uma função. Essa função espera três parâmetros: req, res e next
Para devolver a view 'em-manutencao' você deve usar o método render do objeto response.
res.render('em-manutencao');
Lembre-se de executar next caso o site não esteja em manutenção
 */

const express = require('express');
const app = express();
let emManutencao = false;


app.use((req,res,next)=>{
res.render('em-manutencao');
next();
});
