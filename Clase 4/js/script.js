/* function saludar(nombre){
    console.log('Hola, '+nombre);
}


saludar('Esteban');
saludar('Ivan');
saludar('Lucas');
saludar('Robin');
saludar('Juan');

let nombreUsuario = prompt('Ingresa tu nombre');

saludar(nombreUsuario);

saludar(); */
/* 

// function validar(datoA){
//     if(isNaN(datoA)){
//         console.log('Error');
//     }
// }

function mostrar(mensaje) {
    console.log(mensaje);
}

function sumar(numeroA, numeroB) {
//    validar(numeroA);
//    validar(numeroB) 
    let suma = numeroA + numeroB;
    return suma;
}

function restar(numeroA, numeroB) {
    let resta = numeroA - numeroB;
    return resta;
}

function multiplicar(numeroA, numeroB) {
    let multiplicacion = numeroA * numeroB;
    return multiplicacion;
}

function dividir(numeroA, numeroB) {
    let division = numeroA / numeroB;
    return division;
}
 */


/* function calcular(numeroA, numeroB, signo) {
    let resultado = 0;

    switch (signo) {
        case '+':
            resultado = sumar(numeroA, numeroB);
            break;
        case '-':
            resultado = restar(numeroA, numeroB);
            break;

        case '*':
            resultado = multiplicar(numeroA, numeroB);
            break;
        case "/":
            resultado = dividir(numeroA, numeroB);
            break;
        default:
            console.log('Dato no válido');
            break;
    }

    return resultado;
}


console.log(calcular(10,5,'+')); */

/* sumar(15,16);
console.log(sumar(15, 20));
let doble= sumar(16,40)*2;
console.log(doble); */

/* 
let numero1 = parseInt(prompt('Ingresa el primer operando de la suma'));
let numero2 = parseInt(prompt('Ingresa el segundo operando de la suma'));
let operacion = prompt('Ingresa el signo de la operación: + - * /')
mostrar(calcular(numero1,numero2,operacion)); */

/* 
mostrar(sumar(numero1, numero2)); */



/*
//Scope
//Declarando una variable con scope (ámbito, contexto) global
let variableGlobal = 'Soy una variable global';

console.log(variableGlobal);

function cambiar(){
    variableGlobal = 'Me cambiaron';//Acá modifico una variable global, desde la función
    console.log(variableGlobal);
}

cambiar();

if(true){
    variableGlobal = 'Ahora me cambiaron desde un if'; //otra vez modifico una variable global, desde la estructura de control 
    console.log(variableGlobal);
}

function cambiarLocal(){
    let variableGlobal = 'Soy una nueva variable, solo vivo dentro de la función';//Acá estoy creando una nueva variable, que aunque se llama igual que la anterior, no es la misma, y sólo tiene scope local, sólo existe dentro de esta función
    console.log(variableGlobal);
}

//Este console me permite ver la diferencia de valores entre las variables (global y local). Este muestra la variable global
console.log(variableGlobal)
*/

/*
//Funciones anónimas
const suma = function (a, b) {
    return a + b;
}

suma(5, 6);

//Funciones flecha
const division = (a,b) =>{
    return a/b;
}

//También las podemos escribir en una sola línea
const resta = (a, b) => {return a - b}

//Podemos prescindir de las llaves
const multiplicacion = (a, b) => a * b

//Y si reciben un solo parámetro, hasta de los paréntesis
const mensaje = x =>'El mensaje es: '+x

console.log(mensaje('las funciones flecha son lo máximo!'))
console.log(division(70,35));
*/