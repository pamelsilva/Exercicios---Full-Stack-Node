/* Evitando erros ao criar models

Ao configurar nossos modelos Sequelize você faz algumas suposições sobre nossas tabelas.
Uma delas é que espera que todas as nossas tabelas tenham as colunas criadas e atualizadas.


Se você criar um model de tabela que não tenha nenhuma destas colunas você pode obter o erro clássico
"Unknown column 'createdAt' in 'field list'".


Para evitar isso, devemos dizer explicitamente ao Sequelize que não vamos usar nenhuma das colunas 
criadas ou atualizadas.Para isso, precisamos passar como terceiro parâmetro do método definir um JSON 
com esta estrutura: { timestamps: false }.


Neste exemplo já temos o model configurado para a tabela de usuários, mas precisamos ter certeza de 
que não temos as colunas created_at ou updated_at.O seu objetivo será adicionar a configuração correspondente.
Para indicar que as colunas created_at o updated_at não estão presentes devemos passar como terceiro parãmetro
do método define o seguinte JSON: { timestamps: false } */


const Sequelize = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('usuarios', {
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    senha: Sequelize.STRING,
}, {
    timestamps: false
});

module.exports = Usuario;