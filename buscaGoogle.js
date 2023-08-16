//buscaGoogle.js
//Buscamos el input text llamado q y le escribimos programador novato
let input=document.querySelector('[name="q"]');
if(input)
input.value="programador novato";
//Creamos el evento click
var evt = new MouseEvent('click', {
    bubbles: true,
	cancelable: true,
	view: window
});
let note = document.querySelector('.FPdoLc');

//Si no se cancela el evento lo ejecutamos
// var canceled = !document.querySelector('input[name="btnK"]').dispatchEvent(evt);
let append= document.createElement('div');
append.innerHTML=`
<div>
Esto es texto extra:
<a href="https://www.facebook.com">Clickme!</a>
</div>
`

// Se agrega para mostrar
note.appendChild(append);


