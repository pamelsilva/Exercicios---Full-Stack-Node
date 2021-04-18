/* Exercício: for in
    Considere os valores.

Para este exercício considere a variável bart, que armazena um objeto literal com diferentes propriedades 
e valores.Queremos que, utilizando um for in , imprima no console os valores de cada propriedade desse objeto. */


let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
};
for (let atributos in bart) {
    console.log(bart[atributos]);
};