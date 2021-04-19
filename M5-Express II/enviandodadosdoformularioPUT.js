/* Exercício: Enviando dados de um formulário mediante PUT
    Os formulários em HTML apenas suportam os métodos GET e POST. 
    É por isso que em nossos arquivos node devemos usar a dependência "method-override" 
    para pode simular o envio de dados mediante PUT ou DELETE. Mas também é necessário adicionar no atributo
    action de nossos formulários uma query string para que os dados sejam enviados corretamente. 
    Dado o seguinte formulário modifique o atributo action para que ele permita o envio de dados utilizando PUT.

    Você tem que adicionar um query string no action do formulário
    O nome do parâmetro do query string deve se chamar _method */

    <html>
  <head>
    <title>Formulario de registro</title>
  </head>
  <body>
    <form action="usuarios/atualizar?_method=PUT"method="POST">

    </form>
  </body>
</html>