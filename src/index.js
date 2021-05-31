import cipher from './cipher.js';
    
console.log(cipher);

let mensaje= document.getElementById('messageIn');
let movimientos= document.getElementById('offset');
let coding= document.getElementById('coding');
let decoding= document.getElementById('decoding');
let resultado=document.getElementById('messageOut');

coding.addEventListener('click', codification);
function codification() {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value= cipher.encode (frase, desplazamiento); 
}

decoding.addEventListener ('click', decodification);
function decodification () {
    let frase = mensaje.value;
    let desplazamiento = movimientos.value;
    resultado.value = cipher.decode (frase, desplazamiento);
};




   



 
