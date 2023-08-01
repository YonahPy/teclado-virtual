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


// JavaScript
// Função para adicionar o texto correspondente à tecla clicada ao elemento "textoDigitado"
function adicionarTexto(tecla) {
    const textoDigitado = document.getElementById('textoDigitado');
    textoDigitado.textContent += tecla.textContent;
}

// Função para tratar as teclas especiais
function handleSpecialKeys(tecla) {
    const textoDigitado = document.getElementById('textoDigitado');
  
    switch (tecla.dataset.key) {
        case "caps":
            tecla.classList.toggle('active');
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

        // Adicione outras teclas especiais aqui, se necessário

        default:
            break;
    }
}

// Função para tratar o clique nas teclas
function pressKey(element) {
    const tecla = element;
    tecla.classList.add('pressed');
    setTimeout(() => {
        tecla.classList.remove('pressed');
    }, 100);

    // Verifica se a tecla é especial ou não e chama a função adequada
    if (["caps", "space", "backspace", "enter"].includes(tecla.dataset.key)) {
        handleSpecialKeys(tecla);
    } else {
        adicionarTexto(tecla);
    }
}

// Obtém todas as teclas e adiciona o evento de clique a cada uma delas
const teclas = document.querySelectorAll('.key');
teclas.forEach(tecla => {
    tecla.addEventListener('click', function() {
        pressKey(this); // "this" representa a tecla que foi clicada
    });
});






