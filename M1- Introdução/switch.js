/* Exercício: Fim de Semana
O objetivo deste exercício é imprimir no console um texto que varia de acordo com o dia que contém na variável 
dia.Para isso, já apresentamos um código feito com
if /
else que você precisará modificá - lo para testar as diferentes mensagem. */


let dia = 'segunda-feira'

function fimDeSemana(dia) {
    switch (dia) {
        case 'sexta-feira':
            console.log('Bom fim de semana!');
            break;
        case 'segunda-feira':
            console.log('Boa semana!');
            break;
        default:
            console.log('Bom dia');
    }
}