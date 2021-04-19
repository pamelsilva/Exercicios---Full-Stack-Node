/* Exercício: Conhecendo o FileSystem
O módulo file system nos permitirá ler e gravar arquivos no sistema operacional. 
O uso deste pacote é tão importante que ele já está instalado com o NodeJS.

Para começar, crie a constante fs usando const e atribua a ele o require do "fs".

Para finalizar, faça um console.log da constante fs.

Lembre-se que requisitamos o módulo fs utilizando: require('fs)
Para definir constantes utilize a palavra reservada const */


const path = require('path');
const logo = '/assets/images/logo.png';
const fs =require('fs');

console.log(fs);
