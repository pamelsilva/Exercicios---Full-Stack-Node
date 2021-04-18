/* Exercício Date
Date: uma classe para lidar com o tempo.

Você vai criar agora a sua primeira data com Date...a que você quiser!

    Para começar, você deve criar uma variável data e armazenar nela uma instancia de Date.

Depois, você terá que configurar a data utilizando os métodos setFullYear, setMonth e setDate, passando a eles os argumentos correspondentes a cada um.
Date no MDN: https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
    Para definir o ano use data.setFullYear(ano_desejado)
Para definir o mês é bem semelhante, só não se esqueça que o JS conta os meses a partir do 0 */


let data = new Date(1995, 11, 22);

console.log(data.setYear(1994));
console.log(data.setMonth(12));
console.log(data.setDate(15));