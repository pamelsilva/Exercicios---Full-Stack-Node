/* Exercício: Usando o método compareSync
Neste exemplo, temos definida a constante hash. Ela guarda dentro dela o valor "123456" criptografado.

Nosso objetivo é verificar se "123456" corresponde ao valor do hash. Para isso, devemos usar o método 
compareSync do módulo bcrypt e comparar o resultado dentro de um if. 
Finalmente, dentro do if vamos executar um console.log que diz 'a senha está correta'.
Lembre-se que você deve requisitar o módulo bcrypt: require('bcrypt')
Você tem que avaliar dentro de um if a comparação entre password e hash usando compareSync: if(compareSync())
O método compareSync espera dois parâmetros, o password a comparar e o hash: bcrypt.compareSync(password, hash); */

const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('123456', 10);
if(bcrypt.compareSync("123456",hash));
console.log(true);