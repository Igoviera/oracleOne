
const criptoMap = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat",
};

const descriptoMap = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u",
};


function criptografarTexto() {
    let texto = document.getElementById("texto").value.toLowerCase();
    let textoCriptografado = "";
    
    for (let i = 0; i < texto.length; i++) {
        if (criptoMap[texto[i]]) {
        textoCriptografado += criptoMap[texto[i]];
    } else {
        textoCriptografado += texto[i];
    }
  }
  texto.value = "";
  document.querySelector(".container2").innerHTML = `
    <p class="textCriptografado">${textoCriptografado}</p>
    <button class="btn-descriptografar" id="copiartexto" onclick="copiarTexto()">Copiar</button>
    `;
  limparCampo();
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById("texto").value;

    let textoDescriptografado = textoCriptografado.replace(
        /ai|enter|imes|ober|ufat/g,
        (match) => descriptoMap[match]
  );

  document.querySelector(".container2").innerHTML = `<p class="textCriptografado">${textoDescriptografado}</p>`;
  limparCampo();
}

function copiarTexto(){
    textoCopiado = document.querySelector('.textCriptografado').innerHTML;
    btnCopiar = document.getElementById('copiartexto');

    navigator.clipboard.writeText(textoCopiado).then(() => {
      btnCopiar.innerHTML = "Texto copiado";
    });
}

function limparCampo() {
    texto = document.getElementById('texto');
    texto.value = '';
}
