/* Exercício: push
Novos estudantes se inscreveram!Desejamos adicioná - los ao final do array estudantes.

Seu trabalho será acrescentar um aluno de cada vez ao array de estudantes.Utilize um dos métodos de array.

Os valores de cada aluno são:

nome: João

media: 5

curso: iOS

-- -- -- -- -- -- -- -- --

nome: Miguel

media: 2

curso: Android
Visite MDN: https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push */

let estudantes = [{
        nome: 'Álvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    }
]

estudantes.push({ nome: 'João', media: 5, curso: 'iOS' });

estudantes.push({ nome: 'Miguel', media: 2, curso: 'Android' });

console.log(estudantes);