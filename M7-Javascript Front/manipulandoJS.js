/* Manipulando elementos com JS II

Temos um site HTML definido e queremos começar a manipular seus elementos.

Para este exercício te pedimos que:

    ﻿crie a variável paragrafos
armazene nessa variável todos os paragrafos do documento HTML.

Deverá usar o método do objeto document que te permita selecionar todas as tags < p > do documento.
Lembre - se de usar o método querySelectorAll(). */

window.addEventListener('load', function() {

    let paragrafos = document.querySelectorAll("p");
});