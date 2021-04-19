/* Exercício: Preparando a constante para trabalhar com POST
Agora vamos trabalhar com POST. Você se lembra que as URL do tipo POST são utilizadas para guardar
informações em nossa base de dados ou mandar informações sensíveis. Para recuperar os dados enviados 
por POST nós utilizamos o atributo body do objeto request. Mas antes é necessário indicar ao express 
que vamos trabalhar com JSON e que a informação seja enviada no formato correto. Portanto é necessário 
executar duas linhas de código de acordo com o método use do objeto app.

Já tendo criado a constante app use-a para adicionar a configuração necessária (urlencoded e json) para
trabalhar com post.

Execute o método use do objeto app. Ex: use.app()
Dentro do método use você tem que passar a configuração correspondente: express.urlencoded({ extended: false })
Não se esqueça de adicionar a configuração para receber arquivos json: express.json() */

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());