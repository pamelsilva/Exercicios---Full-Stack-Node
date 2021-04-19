/* Exercício: Adicionando a propriedade usuário
No exemplo a seguir, temos um usuário definido dentro da constante "usuário". 
Usando um middleware, precisamos adicionar no objeto de request a propriedade do usuário com 
o valor da nossa constante. Dessa maneira, todas as rotas devem poder recuperar o valor do usuário 
através do objeto request. Ex: req.usuario.

Para conseguir isso, chamaremos o método use do app e passamos a ele uma função. 
Esta função deve receber três argumentos: req, res e next. 
Vamos adicionar um novo parâmetro chamado user ao objeto req e passar a constante "user" como o valor.

Finalmente, devemos executar o callback next.

Você tem que adicionar o atributo usuário no objeto: req: req.usuario.
Lembre-se de executar o callback next no final da sua função.
O valor do atributo usuario tem que ser a constante usuario: req.usuario = usuario. */


const express = _require('express');
const app = express();
const usuario = {
    nome: 'Antônio',
    sobrenome: 'Zizek'
};


app.use((req,res,next)=>{
req.usuario = usuario
next();
});