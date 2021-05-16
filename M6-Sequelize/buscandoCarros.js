/* Exercício: Buscando carros pela marca

O método findAll nos traz todas as linhas de registros que temos em nossa base.Se precisarmos filtrar o
resultado, podemos passar um JSON como parâmetro do métodos com uma query dentro.

Neste exercício, temos o model Auto.Nosso objetivo será trazer todos os carros cujas coluna de marcas 
correspondam ao valor "Fiat".

O método findAll() espera receber um JSON
O JSON precisa ter uma chave chamada where e ela precisa ter como valor um outro JSON: { where: {... } }
O JSON contido dentro de where terá como chave o nome da coluna que queremos consultar e receberá de valor a 
palavra usada para filtrar as pesquisa: { where: { marca: 'Fiat' } } */

const Auto = require('model/autos.js');

Auto.findAll({ where: { marca: 'Fiat' } }).then(autos => {
    console.log(autos)
});