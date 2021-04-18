/* Exercício: Exportando Módulos
Temos alguns dados do cachorro Scooby armazenados em diversas variáveis.
Seu trabalho será criar a variável cachorro e armazenar nela um objeto com todos os dados do Scooby,
deletar as outras variáveis e depois, exportar o objeto criado.

    Lembre - se que podemos exportar qualquer tipo de dado dentro de um objeto!E de declarar a variável
    cachorro */

//let nome = 'Scooby';
//let idade = 7;
//let gostaDeComer = true;

const cachorro = { nome: 'Scooby', idade: 7, gostaDeComer: true }
module.exports = cachorro;