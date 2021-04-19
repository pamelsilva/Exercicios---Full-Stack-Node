/* Exercício; Testando o hash
Vamos experimentar o funcionamento do módulo hash. A ideia é, dado uma constante que tenha como valor 
uma senha, aplicar o método hashSync para a encriptar.

Primeiro você deve declarar a constante bcrypt e iniciá-la com o require do módulo bcrypt.

Criar uma nova constante chamada hash e atribuir o resultado da aplicação do método hashSync a senha.

Por fim, devemos fazer um console.log para mostrar o valor da constante hash.

Lembre-se que você deve requisitar o módulo bcrypt: require('bcrypt'):
Você tem que aplicar o método hashSync a senha e atribuir o resultado na constante hash.
O método bcrypt espera dois parâmetro, o texto a ser criptografado e o salt: bcrypt.hashSync(password, 10);
Não se esqueça de mostrar o valor da constante hash fazendo um console.log. */

const password = '123456';
const bcrypt=require('bcrypt');
const hash= bcrypt.hashSync("123456",10);
console.log(hash);
