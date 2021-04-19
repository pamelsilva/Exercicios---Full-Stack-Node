/* Adicionando middleware a rota "upload-file"
Ao contrário do middleware de aplicação que roda para todas as rotas, os middlewares de rotas permite 
que você aplique o middleware em uma ou mais rotas selecionadas.

Um exemplo disso é o middleware multer que é adicionado apenas às rotas responsáveis pelo upload de arquivos.
(Lembre-se que multer é um pacote node que permite o upload de arquivos para o servidor).

Para este exemplo já temos a configuração do multer pronto, mas precisamos adicionar o middleware no caminho
"upload-file".

Para isso, teremos que passar como segundo parâmetro o arquivo de rota de upload do middleware upload.any().

Para a rota que já está definida você tem que adicionar como segundo parâmetro o middleware 
upload.any(): router.post('/upload-file', upload.any(), fileController.upload); */


const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/upload-file', upload.any(), fileController.upload);