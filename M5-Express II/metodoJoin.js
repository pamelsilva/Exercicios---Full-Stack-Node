/* Exercício: Usando o método join
O módulo path nos permite trabalhar com o método join com o qual podemos criar uma rota passando cada uma
de suas partes como parâmetros separados.

Usando o método join do módulo path, vamos criar a rota: /tecnologia/video-games/mario-kart.

Para tal, será necessário criar a constante path e atribuir o require do 'path'.

Depois, crie a constante rota e atribua a mesma o resultado da execução do método join do módulo path.

Você deve usar o método join do módulo path: path.join();
O método join espera como parâmetro as partes da rota */


const path = require('path');
const rota=path.join("tecnologia","video-games","mario-kart");

console.log(rota);