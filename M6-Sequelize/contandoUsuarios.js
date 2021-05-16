/* Exercício: Contabilizando número de usuários

Dado o model Usuario, conte o número total de usuários nesta base de dados.

Para isso, será necessário utilizar o método count em Usuario.

Mostre o resultado com um console.log().
Você precisará utilizar o método count no model Usuario: Usuario.count()
O método then precisa ser concatenado: Usuario.count().then(...) */

const Usuario = require('model/usuarios.js');

Usuario.count('Usuario').then(totalUsuario => { console.log(totalUsuario) })