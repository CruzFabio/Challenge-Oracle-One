var texto = document.querySelector('.txtArea');
var mensagem = document.querySelector(".mensagem");
var informe = document.getElementById('msg');
var btnEncriptar = document.querySelector('.bt-criptografar');
var btnDesencriptar = document.querySelector('.bt-descriptografar');

document.getElementById('none').innerHTML = "";
texto.focus();
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//função criptografar
function criptografar() {
    if (texto.value == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        texto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.getElementById('lupa').style.display = 'none';

        var segredo = texto.value;
        var codigoBase = segredo.replace(/e/igm, 'enter');
        var codigoBase = codigoBase.replace(/i/igm, 'imes');
        var codigoBase = codigoBase.replace(/a/igm, 'ai');
        var codigoBase = codigoBase.replace(/o/igm, 'ober');
        var codigoBase = codigoBase.replace(/u/igm, 'ufat');

        document.querySelector('.mensagem').innerHTML = `${codigoBase}`;

        document.getElementById('copiar').innerHTML = '<button class="bt-copiar" onclick="copy()">Copiar</button>';
    }
}

//funcão descriptografar
function descriptografar() {
    if (texto.value == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.getElementById('lupa').style.display;
        texto.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.getElementById('lupa').style.display = 'none';
        document.querySelector('.txtArea').innerHTML = '';

        var revela = texto.value;
        var codigoBase =  revela.replace(/enter/igm, 'e');
        var codigoBase = codigoBase.replace(/imes/igm, 'i');
        var codigoBase = codigoBase.replace(/ai/igm, 'a');
        var codigoBase = codigoBase.replace(/ober/igm, 'o');
        var codigoBase = codigoBase.replace(/ufat/igm, 'u');

        document.querySelector('.mensagem').innerHTML = `${codigoBase}`;

        document.getElementById('copiar').innerHTML = '<button class="bt-copiar" onclick="copy()">Copiar</button>';
    }

}

// function copiar 
function copy() {
    document.querySelector('.mensagem').select();
    document.execCommand('copy');
    // document.execCommand('cut');
    informe.innerHTML = "🗹 Texto copiado";
    document.querySelector(".txtArea").value = "";
}