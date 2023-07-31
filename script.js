function handleSpecialKeys(key) {
    const capsLockKey = document.querySelector('[data-key="caps"]');
    const textoDigitado = document.getElementById('textoDigitado');
  
    switch (key) {
        case "caps":
            capsLockKey.classList.toggle('active');
            textoDigitado.classList.toggle('caps-on');
            break;
  
        case "space":
            textoDigitado.textContent += " ";
            break;
    
        case "backspace":
            textoDigitado.textContent = textoDigitado.textContent.slice(0, -1);
            break;
    
        case "enter":
            textoDigitado.textContent += "\n";
            break;
    
        // Outras teclas especiais aqui
    
        default:
            break;
    }
  }
  

function pressKey(element) {
   const key = element.getAttribute('data-key');
    console.log(key);
  
  handleSpecialKeys(key);
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
    const key = this.getAttribute('data-key');
    
    
    if (["caps", "space", "backspace", "enter"].includes(key)) {
        handleSpecialKeys(key);
    } else {
        const textoDigitado = document.getElementById('textoDigitado');
        textoDigitado.textContent += this.textContent;
    }
    });
});



