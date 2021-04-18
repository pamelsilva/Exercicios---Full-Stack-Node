/* Exercício: Declarando três funções
Você se lembra quando declaramos variáveis​​ para poder usá - las mais tarde ?
 Bem, aqui podemos fazer algo semelhante.Mas, em vez de declarar variáveis​​(estruturas que contêm informações),
 podemos declarar funções(estruturas que processam informações).

Escreva as três funções a seguir:

anterior: recebe um número como parâmetro e retorna esse número menos um.

triplo: recibe um número como parâmetro e devolve o triplo desse número.

anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, 
você terá que retornar o número.recebido multiplicado por 3(três) e o resultado subtrai 1(um).

Esclarecimento: Este exercício traz sua complexidade, é normal levar algum tempo para chegar à solução.

Lembre - se de que funções são como variáveis, uma vez que as declaramos, podemos usá - las em qualquer lugar.
Mesmo dentro de outras funções; - ). */


function anterior(numero) {
    return numero - 1
}

function triplo(numero) {
    return numero * 3
}

function anteriorDoTriplo(numero) {
    return numero * 3 - 1
}