/*
//Abstracción

//código para sumar números en un rango
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}

console.log(total);

//Acá hacemos lo mismo, pero lo abstraemos en una función

function sumarRango(inicio, fin) {
    let total = 0;
    for (let i = inicio; i <= fin; i++) {
        total += i;
    }
    return total;
}

//Uso la función y no me preocupo de cómo se resuelve, yo sólo necesito saber que se va a sumar el rango entre 1 y 10.
console.log(sumarRango(1, 10));*/


/*
//Funciones que reciben una función como parámetro
function porCadaUno(array, fn) {
    for (const elemento of array) {
        fn(elemento);
    }
}

function cuadrado(num) {
    let resultado = num * num;
    console.log(resultado);
}

function cubo(num) {
    let resultado = num * num * num;
    console.log(resultado);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* porCadaUno(numeros, cuadrado);
porCadaUno(numeros, cubo); */

/*
const duplicado = []

porCadaUno(numeros, (el) => { duplicado.push(el * 2) });

console.log(duplicado); */

/* 
//Métodos de los arrays, que son funciones de orden superior (reciben otra función como parámetro)

//forEach()
numeros.forEach((elemento) => {
    elemento = elemento*2;
    numeros.push(elemento)
})

console.log(numeros); */

const cursos = [{
    nombre: 'Javascript',
    precio: 15000
},
{
    nombre: 'ReactJS',
    precio: 22000
},
{
    nombre: 'AngularJS',
    precio: 22000
},
{
    nombre: 'Desarrollo Web',
    precio: 16000
},
]

/* 
//find(). Retorna el primer elemento que cumple con la condición. Si no hay ninguno, retorna undefined
const encontrado =cursos.find((curso)=>curso.precio>20000);
console.log(encontrado);

const noEncontrado = cursos.find((curso) => curso.precio == 10000);
console.log(noEncontrado);


//some(). Retorna true si algún elemento cumple la condición, o false si ninguno lo hace
const alguno = cursos.some((curso) => curso.precio > 20000);
console.log(ninguno);

const ninguno = cursos.some((curso) => curso.nombre == 'Wordpress');
console.log(alguno);


//filter(). Retorna un array con todos los elementos que cumplen la condición. Si no hay nminguno, devuelve un array vacío
const filtrado = cursos.filter((curso) => curso.precio > 20000);
console.log(filtrado);

const infiltrado = cursos.filter((curso) => curso.precio <10000);
console.log(infiltrado);

const otroFiltrado = cursos.filter((curso)=>curso.nombre.includes('De'))
console.log(otroFiltrado);


//map(). Retorna un array con la misma cantidad de elementos que el array original, pero con la operación aplicada
const precioBeca = cursos.map((curso)=>{return{nombre:curso.nombre,precio:curso.precio*.3}})

console.log(cursos)
console.log(precioBeca)

//reduce(). Retorna un único valor que es la suma de todos los valores detallados
const totalNumeros = numeros.reduce((ac,num)=>ac+num,0);
console.log(totalNumeros);


//sort(). Ordena el array original según la función elegida (menor a mayor, mayor a menor). FUNCION DESTRUCTIVA
const desordenados = [1,5,23,45,2,78,4]
desordenados.sort((a,b)=>b-a);

console.log(desordenados); */

/*
//Objeto Math

console.log(Math.PI);

let azar = Math.random();
console.log(azar); 

let azar1a10 = Math.random() * 10;
console.log(azar1a10);


//Métodos de redondeo
console.log(Math.ceil(azar1a10));
console.log(Math.floor(azar1a10));
console.log(Math.round(azar1a10));
console.log(Math.trunc(azar1a10));


//Métodos para obtener máximos y mínimos (Más adelante vamos a ver como usar un array como parámetro de estos métodos)
let maximo = Math.max(22, 64, -54, -12, 78, 145);
console.log(maximo); //-54
let minimo = Math.min(22, 64, -54, -12, 78, 145);
console.log(minimo);//145


*/

/*//Ejemplo de uso de random y redondeo
let dados = []

for (let i = 0; i < 5; i++) {
    let dado = Math.ceil(Math.random() * 6);
    dados.push(dado);
}

console.log(dados);
*/


/*
//Clase Date para manejo de fechas

let fechaActual = new Date();
console.log(fechaActual);

let fechaSimple = new Date(2022, 6, 15);
console.log(fechaSimple);

let ultimoSegundo = new Date(2022, 11, 31, 23, 59, 59);
console.log(ultimoSegundo);

//Métodos para obtener valores singulares de la fecha
console.log(ultimoSegundo.getFullYear());
console.log(ultimoSegundo.getMonth());
console.log(ultimoSegundo.getDay());
console.log(ultimoSegundo.getDate());
console.log(ultimoSegundo.toString());
*/



