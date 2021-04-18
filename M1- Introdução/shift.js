/* Exercício: shift
Um aluno desistiu!

    Temos que dar baixa no primeiro estudante do array estudantes.Para isso, pedimos que crie uma variável chamada alunoDesistente e que, utilizando um método de array, armazene nela esse primeiro estudante.
    https: //www.w3schools.com/jsref/jsref_shift.asp */

let estudantes = [{
        nome: 'Álvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    },
    {
        nome: 'Alexis',
        media: 3,
        curso: 'iOS',
    },
]

let alunoDesistente = estudantes.shift()
console.log(estudantes)