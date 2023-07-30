function pressKey(element) {
    element.classList.add('pressed');
    setTimeout(() => {
         element.classList.remove('pressed');
 }, 100); 
}

let teclado_visivel = true
function mostrarTeclado() {
    const teclado = document.getElementById('teclado');
    if (teclado_visivel){
        teclado.style.display = 'none'
    } else{
        teclado.style.display = 'grid'
    }
    teclado_visivel = !teclado_visivel
    

}


const inputCor = document.getElementById('icolor');
inputCor.addEventListener('input', function() {
    const corSelecionada = inputCor.value;
    
    const teclas = document.querySelectorAll('.key');
    teclas.forEach(tecla => {
        tecla.style.borderColor = corSelecionada;
        tecla.style.color = corSelecionada;
        tecla.style.filter = `drop-shadow(0px 0px 50px ${corSelecionada})`;
    });
    });



const teclas = document.querySelectorAll('.key');

teclas.forEach(tecla => {
    tecla.addEventListener('click', function() {
    const textoDigitado = document.getElementById('textoDigitado');
    textoDigitado.textContent += this.textContent; // Adiciona o texto da tecla clicada ao texto já existente na tela
    });
});
