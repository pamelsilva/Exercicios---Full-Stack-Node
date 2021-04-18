/* Exercício: Desestruturando
Desestruturando..
Para este exercício, já temos uma array de destinos mundiais.

Queremos que, usando a desestruturação, você defina as variáveis​​ bariloche e china e extraia 
apenas os destinos "Bariloche"
e "China" da array.

Opa, esse link pode te ajudar: 
https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao */


let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [marruecos, bariloche, barcelona, china, grecia] = destinosIncriveis;
console.log(bariloche, china);