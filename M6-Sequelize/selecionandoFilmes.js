/* Exercício: Selecionando Filmes

﻿ A partir do nosso model Filmes vamos recuperar todos os filmes da nossa base de dados e fazer um console.log 
do resultado.

    Para isso você pode usar o método findAll do model Filmes. **
        *Lembre - se que este método é assíncrono.

    Você deve usar o método findAll do model Filmes: Filmes.findAll()
    Você deve concatenar com o método findAll o método then: Filmes.findAll().then(...)
O método 'then'receberá um parâmetro com o resultado de findAll, você precisa recuperar esse resultado e 
fazer um console.log: then(filmes => console.log(filmes)) */

const Filmes = require('model/filmes.js');

Filmes.findAll().then(filmes => console.log(filmes))