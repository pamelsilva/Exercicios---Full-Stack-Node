/* Exercício: Vamos criar uma rota json style
Temos um Json com três filmes

Vamos tratar de criar uma ruta para editar os dados de um filme em particular. Um usuário vai ter de ser capaz 
de enviar dados através de um formulário e nós devemos editar a película escolhida. 
Para indicar a película a ser modificada vamos receber a url e a id correspondente. 
Em outras palavras, devemos criar um caminho do tipo PUT para os casos filme/1, filme/2, etc.

Para isso vamos ter que criar a partir do objeto router uma rota do tipo PUT que responsa a qualquer uma
das urls mencionadas anteriormente.
Devemos ser capazes de identificar o filme, dependendo do ID que nos é passado como parâmetro, e atualizar 
seus dados com os que nos são enviados.

Para definir um parâmetro dentro de uma ruta usamos o símbolo "dois pontos" (:)
Para encontrar em um array a película que você deve editar podemos fazer peliculas.forEach e perguntar 
dentro do loop se o id do objeto atual é igual ao id passado como parâmetro
Para recuperar dados enviados por PUT utilizamos o objeto body */


const express = require('express');
const router = express.Router();

let filmes = [
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
        genero: 'Animacao'
    },
    {
        id: 3,
        titulo: 'X-Men: Fênix Negra',
        duracao: 113,
        genero: 'Acao'
    }
];


router.put('/filme/:id', (req, res) => {
let{id}=req.params
let indice=id-1
filme=req.body

filmes[indice].titulo=filme.titulo
filmes[indice].duracao=filme.duracao
filmes[indice].genero=filme.genero
})
