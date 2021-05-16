/* Exercício: Atualizando série
Em determinadas circunstâncias podemos usar o método update para atualizar mais de um registro em nossa 
base de dados.Nesse próximo desafio queremos mudar os valores da coluna genero de todas as séries cujo o gênero 
seja comédia para sitcom.

A ideia por aqui é semelhante do nosso primeiro desafio, porém dessa vez, no nosso objeto de configuração
ou query, devemos fazer um where pela coluna genero(sem acento!).
Hey, não se esqueça de usar o método update do modelo Serie.
Lembre - se que dentro do método update passamos dois objetos como parâmetro.O primeiro contem irá conter
as informações que usaremos para substituir.Já o segundo em qual registro iremos fazer isso usando o atributo
 where. */

const Serie = require('model/Serie.js');

Serie.update({
    genero: 'sitcom'
}, {
    where: { genero: 'comédia' }
});