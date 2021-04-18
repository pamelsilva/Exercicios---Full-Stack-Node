/* Exercício: Configurar Servidor
Vamos ver como configurar um servidor com o Express:

Seu trabalho aqui será instanciar um servidor na porta 8000.
Por sua vez, queremos que a frase "Levantando um servidor com Express"
seja exibida no console quando o servidor estiver rodando, para verificar se foi configurado corretamente.

Você deve usar o método listen.O primeiro parâmetro que recebe é um número que irá representar a porta.
E o segundo ? Que tipo de parâmetro será ? */


const express = require('express');
const app = express();
app.listen(8000, () => console.log('Servidor executando'));
app.get(' / ', (req, res) => {
    res.send("Levantando um servidor com Expres");
})