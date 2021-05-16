window.addEventListener('load', () => {
    let titulo = document.querySelector('.titulo');
    let segundos = document.querySelector('.segundos');
    let botaoMostrar = document.querySelector('.mostrar-segundos');
    let botaoOcultar = document.querySelector('.ocultar-segundos');
    botaoMostrar.addEventListener('click', () => {
        let atualizaSegundo = setInterval(function() {
            let data = new Date();
            segundos.innerHTML = data.getSeconds();
            titulo.style.display = 'none';
            segundos.style.display = 'block';
        }, 0);
    });
    botaoOcultar.addEventListener()
    clearInterval(atualizaSegundo);
    // escreva seu codigo aqui
});