const textoParaDigitar = "A linguagem Java é uma linguagem de programação amplamente utilizada...";

const elementoTexto = document.getElementById("texto-digitar");
let textoExibido = "";
let index = 0;

function digitarTexto() {
    if (index < textoParaDigitar.length) {
        textoExibido += textoParaDigitar.charAt(index);
        elementoTexto.textContent = textoExibido;
        index++;
        setTimeout(digitarTexto, 50); // Velocidade de digitação (em milissegundos)
    }
}

digitarTexto();
