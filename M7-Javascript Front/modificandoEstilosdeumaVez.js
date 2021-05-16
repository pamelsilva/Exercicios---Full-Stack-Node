/* Modificando estilos a varios elementos de uma vez

Podemos mudar muitos de uma vez de vários elementos.

Você se lembra do querySelectorAll() ? Este método nos devolvia algo similar a um array...

Para este exercício queremos que:

﻿Crie a variável livros
Armazene na variavel todos os < li > usando querySelectorAll()
Dentro do ciclo
for
of que está definido no arquivo script.js, aplique à cada livro a cor de fonte 'orange', usando a propriedade 
color.Não deixe de usar o metodo querySelectorAll() para selecionar todos os < li > do documento |
 Precisará utilizar o método style seguido da propriedade color para poder atribuir um novo valor, 
 exemplo: livro.style.color */

window.addEventListener('load', function() {
    let livros = querySelectorAll("li")
        // escreva seu codigo aqui
    for (let livro of livros) {
        livro.style.color = 'orange'
            // escreva seu codigo aqui
    }
});