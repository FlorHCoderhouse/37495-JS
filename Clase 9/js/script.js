const btnSaludoGenerico = document.getElementById('generico');
const btnSaludoPersonalizado = document.getElementById('personalizado');
const titulo = document.querySelector('.coderTitulo');
const btnTest = document.getElementById('tester');
let inputEmail = document.getElementById('email');

let inputNombre = document.querySelector('#nombreUsuario');
let inputDireccion = document.querySelector('#direccion');
function saludarGenerico() {
    alert("Gracias por suscribirte");
}

function saludarPersonalizado(nombre) {
    alert('Bienvenido/a, ' + nombre)
}

btnSaludoGenerico.addEventListener('click', saludarGenerico);
//Sirve para cualquier elemento clickeable, no sólo botones
titulo.addEventListener('click', saludarGenerico);


/* btnSaludoPersonalizado.addEventListener('click', ()=>{
    let nombre = prompt('Ingresa tu nombre');
    saludarPersonalizado(nombre);
}) */

btnSaludoPersonalizado.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    saludarPersonalizado(nombre);
})

btnTest.onclick = () => {
    console.log(('Hiciste click en el boton'));
}

/* btnTest.onmousemove = () => {
    console.log('moviste el mouse por aca');
} */


/* inputEmail.addEventListener('keyup',()=>{
    console.log(inputEmail.value);
}) */

/* inputEmail.addEventListener('keydown', () => {
    console.log(inputEmail.value);
}) */


/* inputNombre.addEventListener('keypress',(evento)=>{

    let codCaracter = evento.charCode;
    if(codCaracter!=0){
        if (codCaracter < 97 || codCaracter > 122){
            evento.preventDefault();
            alert("Solo podes usar minusculas");
        }
    }
}) */


inputNombre.onchange = () => {
    console.log(inputNombre.value);
}

inputDireccion.addEventListener('input', () => {
    console.log(inputDireccion.value);
})


function cambiarImagen(source) {
    document.getElementById('zapatillaConverse').src = source;
}

/*
let radioBeige = document.getElementById('beige');
let radioNegro = document.getElementById('negro');

radioBeige.addEventListener('click',()=>{
    cambiarImagen('./img/converse_beige.jfif');
})

radioNegro.addEventListener('click', () => {
    cambiarImagen('./img/converse_negra.jfif');
})
 */


const zapas = [{
    id: 1,
    nombre: 'Chuck Taylor',
    color: 'negro',
    imagen: './img/converse_negra.jfif'
}, {
    id: 2,
    nombre: 'Chuck Taylor',
    color: 'beige',
    imagen: './img/converse_beige.jfif'
}]


let elementosradio = document.querySelectorAll('.radiobutton');

/* 
//Atención que esta línea no funciona porque no podemos agregar de una sola vez a todos los elementos del array el listener
elementosradio.addEventListener('click',()=>{
    cambiarImagen('./img/converse negra.jfif');
}) */

for (const radioButton of elementosradio) {
    radioButton.addEventListener('click', () => {
        let colorElegido = radioButton.value;
        let varianteElegida = zapas.find((zapa) => zapa.color === colorElegido);
        cambiarImagen(varianteElegida.imagen)
    })
}

