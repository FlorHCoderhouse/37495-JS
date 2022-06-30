

/* //Bucle for. 
for (let i = 0; i < 3; i++) {

    alert('¿Usted es el jefe de los minisuper? Sí. Repetición n°' + i);

}
alert('Gracias, vuelvan prontos'); */

/* //Acá hacemos una cuetna regresiva

for (let i = 10; i >=0; i--) {

    console.log( i);

} */

/* 
//Podemos usar el valor de la variable i para hacer operaciones en cada iteración
for(let i=1;i<=10;i++){
    console.log(i*3);
}
 */

/*
//Le pedimos un dato al usuario en cada iteración

 for (let i = 0; i < 3; i++) {
    let nombre = prompt('ingresa tu nombre');
    console.log('Bienvenido/a, ' + nombre);
} */

/* 
//Sentencia break
for(let i=0;i<10;i++){
    if(i==5){
        alert('la variable es 5');
        break;
    }
    console.log(i);
} */

/*
//sentencia continue
for (let i = 0; i < 10; i++) {
    if (i == 4) {
        
        alert('la variable es 4');
        continue;
    }
    console.log(i);
} */




/* 
//Bucle while
let repetir = true;

while (repetir) {
    console.log('Soy un bucle while');
    repetir=false;
} */

/*
//while con una variable numérica

let contador = 0;

while (contador < 5) {
    console.log(contador);
    contador++;
}

*/

/* let edad = parseInt(prompt('Ingresa tu edad'));

while (edad<13) {
    console.log('No podés pasar. Tenés que tener 13 o más');
    edad = parseInt(prompt('Ingresa tu edad'));
    
}

alert('Bienvenido/a'); */


/* let colorSecreto = 'verde';

let pedidoBruja = prompt('Qué color querés?');

while(pedidoBruja!=colorSecreto){
    alert('No tenemos color '+pedidoBruja);
    pedidoBruja = prompt('Qué color querés?');
}


alert(colorSecreto + ' corre como chango!') */

/* 
//Bucle do    while
let repetir = false;

do {
    console.log('Soy un do...while');
} while (repetir); */

/* let passGuardado = 'ejemplo'
let continuar = true;

do {
    let password = prompt('Ingresa tu password');
    if (passGuardado == password) {
        alert('bienvenido/a');
        continuar = false;
        break;

    }
} while (continuar); */

/*
//Switch
let opcion = prompt('Elegí una opción. \n1: Té \n2: Café\n3: Chocolate ');

switch (opcion) {
    case '1':
        console.log('Elegiste té');
        break;

    case '2':
        console.log('Elegiste café');
        break;
    case '3':
        console.log('Elegiste chocolate');
        break;

    default:
        console.log('Elegiste una opción no válida');
        break;
}

*/

