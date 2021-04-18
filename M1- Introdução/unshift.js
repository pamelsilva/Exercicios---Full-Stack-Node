/* Exercício: unshift
Alguns alunos foram reintegrados!
    Agora você tem a tarefa de reintegrar dois alunos ao início do array!Para isso, utilize um método do array!

            Os dados dos alunos que devem ser acrescentados são os seguintes:

            nome: "Mariana",

            media: 9,

            curso: "Full Stack"

        -- -- -- -- -- -- -- -- -- -- -- -- -

        nome: "Francisco",

        media: 2,

        curso: "Android"
https: //www.w3schools.com/jsref/jsref_unshift.asp */


let estudantes = [{
        nome: 'Alvaro',
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
    }
]

estudantes.unshift({ nome: "Mariana", media: 9, curso: "Full Stack" });

estudantes.unshift({ nome: "Francisco", media: 2, curso: "Android" });

console.log(estudantes);