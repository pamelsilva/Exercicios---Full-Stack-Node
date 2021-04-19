/* Exercício: Validando informação hasheada
A idéia de usar o hash é salvar informações confidenciais sem revelar seu conteúdo original. 
Mas o que acontece quando precisamos recuperar essas informações para, por exemplo, validar o login
de um usuário.

Neste exemplo, já temos uma sequência de texto criptografada anteriormente, que armazenamos na constante hash1.
Nosso objetivo é criptografar a sequência de texto '123456', armazená-la na constante hash2 e, finalmente, 
usar um if para comparar o hash1 e o hash2 para ver se são iguais.

Dentro do if, execute um console.log que diga 'os hashes são iguais'.

Lembre-se que você deve requisitar o módulo bcrypt: require('bcrypt').
Você tem que aplicar o método hashSync ao texto '123456' e atribuir o resultado na constante hash2.
O método bcrypt espera dois parâmetros, o texto a criptografar e o salt: bcrypt.hashSync('123456', 10);
Comparar os dois hash com um if. */

const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);
const  hash2= bcrypt.hashSync('123456', 10);
if( hash1== hash2){
    console.log('os hashes são iguais');
};