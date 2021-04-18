/* Exercício: Rotas e Controller
Você criou um controller para lidar com o carrinho de compras(CarrinhoController).
Você já estava indo embora quando o líder do projeto percebeu que não existe uma rota configurada
para o seu controller!Você bem que tentou, mas ele te alcançou antes de você tocar na maçaneta!Não teve jeito.

Crie uma rota get para o endereço raíz(/) passando como parâmetro :item. Essa rota deve redirecionar 
para o método addItem do CarrinhoController

Lembre que as rotas podem receber parâmetros: get('/:item', _____) */


let express = require('express')
let router = express.Router();
let CarrinhoController = require('../controllers/CarrinhoController')

router.get('/:item', CarrinhoController.addItem)

module.exports = router