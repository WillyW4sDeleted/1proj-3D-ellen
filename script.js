document.addEventListener ('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1; 
    
    const aumentafontebotao = document.getElementById('aumentar-fonte');

    aumentafontebotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    const diminuirfontebotao = document. getElementById ('diminuir-fonte'); 
    
}

)