//Declaramos un array vacío
const arrayVacio = [];
const carrito = [];

const familiaSimpson = ['Abe Simpson', 'Homero', 'Marge', 'Bart', 'Lisa', 'Maggie', 'Huesos', 'Bola de Nieve', 'Patty', 'Selma'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const perros = ['firu', 'terbal', 'bolt', 'srBigotes', 'lazzie'];
const gatos = ['michi', 'fuz', 'garfield'];

//Arrays con elementos con diferentes tipos de datos
const mix = ['Hola', 12, true, 3.14, [1, 2, 3]];
const hermione = ['castaño', 'gato', 17, 'granger', true];



/* 
//Acceder a los elementos del array 
console.log(familiaSimpson[0]);
console.log(familiaSimpson[1]);
console.log(familiaSimpson[2]);
console.log(familiaSimpson[3]);
console.log(familiaSimpson[4]);
console.log(familiaSimpson[5]);
console.log(familiaSimpson[6]);
console.log(familiaSimpson[7]);
console.log(familiaSimpson[8]);

//operando con elementos del array
let resultado = numeros[6]+numeros[8];
console.log(resultado);
*/

/*
//Propiedad length del array nos permite saber su longitud, cuantos elementos tiene
console.log(familiaSimpson.length); 
*/

/* 
//Bucle for para recorer el array
for (let i = 0; i < familiaSimpson.length; i++) {
    console.log(familiaSimpson[i]);
    
} 
*/

/*
//Diferenciando cantidad de elementos de índice
for (let index = 0; index < familiaSimpson.length; index++) {
    console.log('El miembro número ' + (index + 1) + ' de la familia es: ' + familiaSimpson[index] + '. Su posición en el array es ' + index);
} 
*/

/* 
//Métodos de los arrays

//Agregar elementos


familiaSimpson.push('Hugo','Sra. Bouvier'); //agrega un elemento al final
console.log(familiaSimpson);

familiaSimpson.unshift('Mona Simpson'); //agrega un elemento al principio
console.log(familiaSimpson);

//Eliminar elementos
familiaSimpson.pop(); //elimina el último elemento
console.log(familiaSimpson);

familiaSimpson.shift(); //elimina el primer elemento
console.log(familiaSimpson);

familiaSimpson.splice(2,4);//elimina uno o más elementos desde una posición específica
console.log(familiaSimpson);
*/


/* 
//Otros métodos de los arays
//join
const imprimible = familiaSimpson.join(' - ');
console.log(imprimible); 

//concat
const mascotas = perros.concat(gatos);
console.log(mascotas);
const mascotas2=gatos.concat(perros);
console.log(mascotas2);

//slice
const otrosPerros =perros.slice(1,3);
console.log(otrosPerros);

//indexOf - devuelve un entero con el índice del elemento
console.log(perros.indexOf('bolt'));
console.log(perros.indexOf('oddie'));

//includes - devuelve un booleano
console.log(otrosPerros.includes('terbal'));
console.log(otrosPerros.includes('lazzie'));

carrito.includes('desodorante');

//reverse - método DESTRUCTIVO!!
const nuevoGato = gatos;
nuevoGato.reverse();
console.log(gatos);
console.log(nuevoGato);

*/


/*  
//Arrays de objetos

const librosHarryPotter = [{ id: 100, titulo: 'Harry Potter y La Piedra filosofal', fecha: 1997 }, { id: 200, titulo: 'Harry Potter y la Cámara de los Secretos', fecha: 1998 }, { id: 300, titulo: 'Harry Potter y el prisionero de Azkabán', fecha: 1999 },
{ id: 400, titulo: 'Harry Potter y el cáliz de fuego', fecha: 2000 }]

console.log(librosHarryPotter);
librosHarryPotter.push({id:500, titulo:'Harry Potter y la Orden del Fénix',fecha: 2001})
console.log(librosHarryPotter);


//bucle for...of para recorrer un array de objetos
for (const libro of librosHarryPotter) {
    alert('El libro se llama '+libro.titulo+ ' y se editó el año '+libro.fecha);
    libro.id=libro.id+1;
    console.log(libro.id);
}
*/
