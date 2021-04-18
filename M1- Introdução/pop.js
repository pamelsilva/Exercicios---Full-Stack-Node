/* Exercício: pop
Sim, Alexis se formou no ensino superior!

Para este exercício, contamos com o array estudantes.Em cada índice deste array se armazena um objeto com as propriedades nome, média e curso.

O último aluno deste array(Alexis) se formou!Queremos remover o Alexis do array de estudantes utilizando um método de array.Guarde os dados de Alexis em uma nova variável chamada alunoFormado.

Uma boa busca vale mais do que mil respostas: https: //www.google.com/search?channel=fs&q=array.pop+javascript&ie=utf-8&oe=utf-8 */


let estudantes = [{
        nome: "Álvaro",
        media: 9,
        curso: "Android"
    },
    {
        nome: "Daniel",
        media: 6,
        curso: "Full Stack"
    },
    {
        nome: "Alexis",
        media: 3,
        curso: "iOS"
    }
];

let alunoFormado = estudantes.pop()
console.log(estudantes);