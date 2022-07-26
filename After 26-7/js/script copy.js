const usuarios = [{
    nombre: 'Azul',
    user: 'azulperez@mail.com',
    pass: 'azulcomoelmarazul'
},
{
    nombre: 'Betiana',
    user: 'betidicarlo@mail.com',
    pass: 'sha23AWx!'
},
{
    nombre: 'Carlos',
    user: 'lopezcarlosadrian@mail.com',
    pass: 'sanlore2002'
}]

let mascotas = [{
    nombre: "Oddie",
    especie: "perro",
    edad: 1,
    peso: 3,
    img: './img/oddie.jpg'
}, {
    nombre: "Garfield",
    especie: "gato",
    edad: 3,
    peso: 8,
    img: './img/garfield.webp'
}, {
    nombre: "Orson",
    especie: "chancho",
    edad: 2,
    peso: 40,
    img: './img/orson.webp'
}, {
    nombre: "Roy",
    especie: "gallo",
    edad: 2,
    peso: 2,
    img: './img/roy.webp'
}]

let mailReg = document.getElementById('emailLogin');
let passReg = document.getElementById('passwordLogin');
let recordar = document.getElementById('recordarme');
let btnLogin = document.getElementById('login');
let modalEl = document.getElementById('modalLogin');
let modal = new bootstrap.Modal(modalEl);
let contTarjetas = document.getElementById('tarjetas');

/*
//Estas variables las tenía que crear para usar con dos funciones, antes de refactorizar el código.
let btnModalLogin = document.getElementById('btnModalLogin');
let btnLogout = document.getElementById('btnLogout');
let contUsuario = document.getElementById('logged');
let contInvitado = document.getElementById('guest');
let nombreUsuario = document.getElementById('nombreUsuario');*/

//Ahora, tengo todos los elementos anteriores dentro de una sola variable, y los utilizo en una función mucho más abstracta
let toggles = document.querySelectorAll('.toggles');



function guardarDatos(storage) {
    let user = mailReg.value;
    let pass = passReg.value;

    const usuario = {
        'user': user,
        'pass': pass
    }

    /*
    //Este es el código original, sin refactorizar
    if (storage === 'sessionStorage') {
                sessionStorage.setItem('usuario', JSON.stringify(usuario));
            } 
            
            if (storage === 'localStorage') {
                localStorage.setItem('usuario', JSON.stringify(usuario));
            }
        */

    //Refactorización usando un operador &&
    storage === 'sessionStorage' && sessionStorage.setItem('usuario', JSON.stringify(usuario));
    storage === 'localStorage' && localStorage.setItem('usuario', JSON.stringify(usuario));

}

function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function mostrarInfoMascota(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = `<div class="card cardMascota" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreMascota">Nombre: ${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class="card-img-bottom" id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="especieMascota">Especie: ${element.especie}</p>
                    <p class="card-text" id="edadMascota">Edad: ${element.edad} años</p>
                    <p class="card-text" id="pesoMascota">Peso: ${element.peso} kilos</p>
                </div>
            </div>`;
        contTarjetas.innerHTML += html;
    });
}

function recuperarUsuario(storage) {
    let usuarioEnStorage = JSON.parse(storage.getItem('usuario'));
    console.log(usuarioEnStorage);
    return usuarioEnStorage;
}

function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.user}</span>`
}

function isLogged(usuario) {

    if (usuario) {
        saludar(usuario);
        mostrarInfoMascota(mascotas);
        presentarInfo(toggles, 'd-none');
    }
}


/*
//Estas funciones me permiten mostrar y ocultar elementos agregando y sacando clases, pero no son reutilizables. Las refactoricé con la función que está más abajo.

function presentarInfoUsuario() {
    nombreUsuario.classList.remove('d-none');
    contUsuario.classList.remove('d-none');
    btnLogout.classList.remove('d-none');
    contInvitado.classList.add('d-none');
    btnModalLogin.classList.add('d-none');
}

function presentarInfoInvitado() {
    nombreUsuario.classList.add('d-none');
    contUsuario.classList.add('d-none');
    btnLogout.classList.add('d-none');
    contInvitado.classList.remove('d-none');
    btnModalLogin.classList.remove('d-none');
} */


//Esta función es la refactorización de las funciones que están comentadas. Es mucho más abstracta y reutilizable
function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}


btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (!mailReg.value || !passReg.value) {
        alert('Todos los campos son requeridos');
    } else {
        if (recordar.checked) {
            guardarDatos('localStorage');
            saludar(recuperarUsuario(localStorage));
        } else {
            guardarDatos('sessionStorage');
            saludar(recuperarUsuario(sessionStorage));
        }
    }

    modal.hide();
    mostrarInfoMascota(mascotas);
    presentarInfo(toggles, 'd-none');
});

btnLogout.addEventListener('click', () => {
    borrarDatos();
    presentarInfo(toggles, 'd-none');

});

isLogged(recuperarUsuario(localStorage));






