/* Vamos criar nossa primeira rota com express
Vamos criar nossa primeira rota com express. Para isso, crie a constante chamada express e 
faça um require do módulo express.

Em seguida, crie uma constante chamada router e atribua a mesma a inicialização da função Router do express.

Finalmente, usando a constante router cria uma rota "/filmes" que responda ao método GET.

Para checar se tudo está funcionado faça com que a rota retorne como resposta "Lista de filmes"

Não se esqueça de utilizar o método send() para enviar a mensagem "Lista de filmes". Lembre-se que 
o método get recebe dois parâmetros: um request e uma response, em um deles você deve aplicar o método send()
Lembre-se que obtemos o objeto router a partir do express: express.Router() */

const express=require('express');
const router=express.Router();
router.get("/filmes",(req,res)=>{;
res.send ("Lista de filmes");
});