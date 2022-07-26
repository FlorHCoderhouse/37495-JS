let recordar = document.getElementById("rememberMe");
let btnLogin = document.getElementById('btnLogin');
let btnVaciarTodo = document.getElementById('btnVaciarLocalStorage');
let btnVaciarSessionStorage = document.getElementById('btnVaciarSessionStorage');

function guardarDatos(storage) {
    let user = document.getElementById('emailAddress').value;
    let pass = document.getElementById('password').value;

    const usuario = {
        "user": user,
        "pass": pass
    }

    if (storage === "localStorage") {
        localStorage.setItem('user', JSON.stringify(usuario));
    }

    if (storage === "sessionStorage") {
        sessionStorage.setItem('user', JSON.stringify(usuario));
    }

}


function borrarDatos(storage){
    storage.clear();
}


btnLogin.addEventListener('click',()=>{
    if(recordar.checked){
        guardarDatos('localStorage');
    } else{
        guardarDatos('sessionStorage');
    }
});

btnVaciarTodo.addEventListener('click',()=>{
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
})

btnVaciarSessionStorage.addEventListener('click',()=>{
    borrarDatos(sessionStorage)
})