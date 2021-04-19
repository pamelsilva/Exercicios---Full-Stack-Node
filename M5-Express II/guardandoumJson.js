/* Exercício: Guardando um JSON
Dado o seguinte json, salve-o em um arquivo chamado filmes.json

Lembre-se de que os objetos do tipo json não podem ser salvos diretamente em um arquivo de texto,
eles devem primeiro ser transformados em uma string. Para isso, temos que usar JSON.stringify ().

Para criar um arquivo precisamos usar o método wireFileSync do módulo fs
O métodod writeFileSync recebe como primeiro parâmetro o nome do arquivo e o conteúdo como segundo.
Não se esqueça de converter o JSON em texto usando JSON.stringfy(). */


const fs = require('fs');

const filmes = [
    {
        id: 1,
        titulo: 'Spider-Man: Longe de casa',
        duracao: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracao: 100,
        genero: 'Animação'
    },
    {
        id: 3,
        titulo: 'X-Men: Fênix Negra',
        duracao: 113,
        genero: 'Ação'
    }
];

const filmesJSON=JSON.stringify(filmes);
fs.writeFileSync('filmes.json',filmesJSON);