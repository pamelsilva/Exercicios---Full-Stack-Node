/* Manipulando elementos por nome da classe

Temos um site HTML definido e queremos começar a manipular seus elementos.
Para este exercício te pedimos que:

﻿crie a variavel barraDeNavegacao
armazene nesta variável a seleção do elemento < ul > com a classe "nav-bar".


Mas dessa vez não queremos que use o querySelector(), precisamos usar a classe para selecioná - lo...
Devemos usar o método getElementsByClassName() | Lembre - se que ao utilizar esse método não precisamos 
indicar o " . " mesmo por se tratar de uma classe. */

window.addEventListener('load', function() {

    let barraDeNavegacao = document.getElementsByClassName("nav-bar")
});