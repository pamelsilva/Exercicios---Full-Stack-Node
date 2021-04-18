/* Exercício: Requisitando Módulos
Dentro de um novo arquivo queremos acessar os dados contidos no arquivo cachorro.js o mesmo,
para requisita - lo, se encontra em. / cachorro.O arquivo possui um objeto literal que tem 
os atributos nome e idade.

Seu trabalho será criar a variável cachorro e requisitar o módulo cachorro.
Em seguida, imprima por console.log() os dados usando a seguinte frase: 
"O cachorro se chama ____ e tem ____ anos"

Lembre - se do comando para requisitar módulos!E que os dados que queremos exportar estão dentro de.
/ cachorro */


const cachorro = require('./cachorro')

console.log("O cachorro se chama " + cachorro.nome + " e tem " + cachorro.idade + " anos");