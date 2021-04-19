/* Renderizando o login
Para este exercício pedimos que complete o controlador do usuário fazendo com que ao invocar o loginUser
o mesmo renderize com EJS a view login.
Lembre-se que não precisa explicitar que o login é um arquivo .ejs */

let userController = {
    loginUser: function (req,res){
        res.render('login');
    }
}