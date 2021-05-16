/* Exercício: Selecionando pela conta gmail

Neste exercício, vamos buscar todos os usuários que possuem uma conta Gmail.Para fazer isso, 
vamos precisar perguntar dentro do findAll se os valores contidos coluna email terminam com a string de texto 
"@gmail.com".

Até agora o where esperava um JSON cuja chave era a coluna a ser pesquisada e valor era o que queríamos 
pesquisar.Isto nos trouxe combinações idênticas, é como usar o mesmo operador do MySQL.Mas agora vamos 
precisar usar um operador similar, ou seja, vamos ter que recriar com sequelizar esta consulta MySQL:
'SELECT * FROM users WHERE email LIKE "%gmail"'
    '.

Para isso, dentro do where onde vamos passar um JSON com o nome da coluna e cujo valor é um novo JSON: 
{[Op.like]: '%gmail.com'}
O método findAll espera receber um JSON
O JSON deve ter uma chave chamada 'where'
que terá como valor um outro JSON: { where: {... } }
O JSON dentro de 'where'
terá como chave o nome da coluna que queremos fazer a busca e como valor teremos a expressão para like: {
where: {[Op.like]: '%gmail.com'}} */

const Sequelize = require('sequelize');
const Usuario = require('model/usuarios.js');
const Op = Sequelize.Op

Usuario.findAll({
    where: {
        email: {
            [Op.like]: '%gmail.com'
        }
    }
}).then(usuarios => {
    console.log(usuarios)
});