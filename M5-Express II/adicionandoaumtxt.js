/* Exercício: Adicionando conteúdo a um .txt
Temos um arquivo chamado "pendente.txt" com uma lista de tarefas.

O objetivo é adicionar a tarefa "aprender Node" à lista sem excluir o conteúdo atual.

Para adicionar informações a um arquivo sem apagar o conteúdo atual precisamos utilizar o método
appendFileSync do módulo File System
O método appendFileSync recebe como primeiro parâmetro o nome do arquivo e como segundo parâmetro o 
conteúdo que você quer adicionar.
Não é necessário usar JSON.stringfy já que não estamos trabalhando com objetos .JSON
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

fs.appendFileSync("pendente.txt" ,"aprender Node");