/* Exercício: Contando com while
Vamos montar uma função que conta de um número para outro.

Para este exercício, fornecemos a função de contagem já declarada.Esta função receberá dois parâmetros numéricos.
Queremos que a função vá do primeiro parâmetro para o segundo e imprima o texto pelo console 
"O número atual é__ e é menor que__".[
            Por exemplo, se passarmos os números 4 e 6, veremos algo assim:

            "O número atual é 4 e é menor que 6"
            "O número atual é 5 e é menor que 6" */


function count(inicio, fim) {
    let numeros = 0;
    while (inicio < fim) {
        console.log("O número atual é" + fim + " e é menor que" + inicio);
        numeros++;
    }
}