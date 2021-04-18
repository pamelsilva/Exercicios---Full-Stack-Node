/* Exercício - exportar rotas
No script deste exercício já definimos as rotas relacionadas com os request das informações
contidas no array de séries.

O seu trabalho será tornar esse código "visível"
para assim podermos acessá - lo a partir de outros arquivos.

Lembra como fazer isso ? Quem é responsável pelo compartilhamento de todos esses caminhos definidos ?
A variável router deve ser exportada.
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {});
router.get('/:genero', (req, res) => {});
router.get('/criar', (req, res) => {});

module.exports = router;