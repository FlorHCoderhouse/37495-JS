/* 
//Crear claves. Los metodos son los mismos para ambos tipos de storage

localStorage.setItem('nombre', 'Nicolás');
localStorage.setItem('apellido', 'Krein Werle');
localStorage.setItem('edad',35);
localStorage.setItem('esMayor',true);

sessionStorage.setItem('name', 'Juan Villareal');
sessionStorage.setItem('pass', 'pepePateaTraseros');




 */
/* let nombreUsuario = localStorage.getItem('nombre');
console.log(nombreUsuario); */


/* 
//Por defecto, los valores se guardn como strings, independientemente del tipo de dato original. Y se recuperan también como strings.

let edadAGuardar = 37
sessionStorage.setItem('edad', edadAGuardar);
let edadUsuario = sessionStorage.getItem('edad');
console.log(edadUsuario);

sessionStorage.setItem('booleano', true)
let boolean = sessionStorage.getItem('booleano');

//Una vez recuperados, hacemos algunos trucos para obtener el tipo de dato correcto
sessionStorage.setItem('altura',1.61)
sessionStorage.setItem('cuotas', [3, 6, 9, 12]);
sessionStorage.setItem('esDarkMode', true);

let medida = parseFloat(sessionStorage.getItem('altura'));

let cantCuotas = sessionStorage.getItem('cuotas').split(",");
for (let i = 0; i < cantCuotas.length; i++) {
    cantCuotas[i] = parseInt(cantCuotas[i]);
}

let modo = (sessionStorage.getItem('esDarkMode') == 'true'); */


/* 
//acceder a las claves del storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave)
    console.log('Clave: ' + clave);
    console.log('Valor: ' +valor);


} 
*/

/* 
//Remover claves individuales
sessionStorage.removeItem('pass');

//Limpiar todo el storage
localStorage.clear(); */


/* //Usando JSON y sus métodos para guardar objetos en el storage
let flor = {
    user: "Flor",
    pass: "123"
}

sessionStorage.setItem('usuario',JSON.stringify(flor));
let usuarioRecuperado = JSON.parse(sessionStorage.getItem('usuario'));
console.log(sessionStorage.getItem('usuario'));
console.log(usuarioRecuperado); */

