/* let edadObligada = 18;
let edadOptativa = 16; */
/* let edadUsuario = parseInt(prompt("ingresa tu edad")); */
/* let verdad =true;
let mentira =false;
let verdadero = 1<2;
let booleana = edadObligada>edadUsuario; */

/* 
if (edadUsuario >= edadPermitida) {
    console.log("No podés comprar una cerveza");
}else{
    console.log("Sí podes comprar");
} */

/* 
if (edadUsuario >= edadObligada) {
    console.log("POdés manejar solo/a");
} else if (edadUsuario >= edadOptativa) {
    console.log("Podés manejar con acompañamiento");
} else {
    console.log("No podés manejar");
}


let esMayor= edadUsuario>=edadObligada;

if(!esMayor){
    console.log("Sos mayor");
}else{
    console.log("No sos mayor");
}
 */

let string = '1';
let numero = 1;

let carrito =true;

if(!carrito){
    console.log('creando carrito'+string);
}else{
    console.log('el carrito ya existe');
}

/* 
//Acá les dejo más ejemplos, además de los que vimos en clase
//Variables booleanas

let edad = 12;
let miEdad = "37";
let edadLucas = prompt('Lucas, Ingresa tu edad');
let numeroA = 15;
let numeroB =320;

//Guardo un valor booleano explícito. Puede ser true o false
let variableBooleana = false;
//Guardo el resultado de una comparación, que es un valor true o false
let variableBooleanaB = (10>2);
//puedo guardar la comparación entre otras dos variables.
let variableBool = (numeroA<numeroB);
//El operador de igualdad estricta compara el valor de la variable y también el tipo de dato
let comparacion = (miEdad === edadLucas); */

/* //If
if (1<2) {
    console.log('1 es menor que dos');
}

//if-else
if (1<3) {
    console.log('1 es menor que 3');
}else{
    console.log('1 no es menor que 3');
}

//if- else if
if (edad >= 18) {
    console.log('Puede abrir una cuenta full');
} else if (edad >= 13) {
    console.log('Podes tener una cuenta pero le vamos a preguntar a tu responsable');
} else {
    console.log('Llama a tus padres');
}

console.log('Fin del condicional'); */


//Operadores lógicos
//> Mayor que
//< Menor que
//>= Mayor o igual que
//<= Menor o igual que
//= asignación
//== comparacion de igualdad de valor
//=== comparacion estricta (compara el valor y el tipo de dato)
//!= distinto de
//!== distinto (estricto)

/* //Atención al orden de las condiciones a evaluar
let numero = 1;

if (numero < 10) {
    console.log('El numero es menor a 10');
} else if (numero < 5) {
    console.log('El numero es menor a 5');
} else {
    console.log('El numero es mayor a 10');
}  */


/* //Evaluamos directamente una variable booleana

let booleana = false;

if(booleana){
    console.log('La variable es false');
}else{
    console.log('La variable es true');
}  */

/* let palabra = parseInt("7");
let otraPalabra =7;

console.log(palabra===otraPalabra); // */

/* let nombre = prompt('Ingresa tu nombre'); */
/* let apellido = prompt('Ingresa tu apellido');

if(nombre!='' || apellido!=''){
    alert('Bienvenido/a '+nombre+' '+apellido)
}else{
    alert('Faltan datos')
}
 */


/* if((nombre!='')&&(nombre=="Flor"||nombre=="flor")){
    alert("Bienvenida "+nombre)
}else{
    alert("No sos Flor")
} */

/* Condicional 

let edadConductor = parseInt(prompt('ngrese su edad'));

if (edadConductor >= 18) {
    console.log('Puede conducir sin acompañante');
} else if (edadConductor < 18 && edadConductor >= 13) {//Este condicional está bien pero es redundante. Si el programa llegó hasta este bloque, es porque la primera condición es falsa. No hace falta la parte de edadConductor < 18 &&
    console.log('Puede conducir con un acompañante adulto responsable');
} else {
    console.log("No puede conducir, ni solo/a ni acompañado/a")
} */