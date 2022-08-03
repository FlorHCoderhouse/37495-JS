/* let contador = 0;

contador = contador + 1;

contador += 1;
contador++; */

/* let temperatura =31;

if (temperatura>30){
    alert('Día caluroso')
}else{
    alert('Día agradable')
}

temperatura > 30 ? alert('Día caluroso') : alert('Día agradable');

//bool ? algo : otracosa

let stock = 10;

stock>0? alert('Producto sin stock'):alert('El stock es '+ stock) 

const carrito = ['papas'];

carrito.length===0 && console.log('El carrito está vacío'); */

/* const usuario = {
    //nombre: 'Juan',
    edad: 19
} */
/* 
const registroUsuario = usuario.edad>=18 && new Date();
console.log(registroUsuario); */
/* 
const nombreUsuario = usuario.nombre || 'nombre inexistente'

let puerto = null;

const PORT = puerto||3000;


console.log(PORT); */


const estudiante2 = {
    nombre: 'Luciano',
    edad: 30,
    curso: 'Diseño UX/UI',
    telefono: {
        casa: 1122233344,
        movil: 1564978520
    }
}

/* let edad = estudiante2.edad */

//let {edad, nombre, telefono :{movil}} = estudiante2

/* let nombre = estudiante2.nombre
let edad = estudiante2.edad
let curso = estudiante2.curso */

//console.log(nombre);
//console.log(edad);
/* console.log(curso); */
//console.log(movil);
//console.log(telefono);


/* const item = {
    item_id: 120,
    product_name: "TV Smart",
    price_per_unit: 80000
}

let {item_id:id, product_name:nombre,price_per_unit:precio}=item

console.log(id);

window.addEventListener('click',({x,y})=>{
    console.log(x,y);
})



const [a,b,c,d,e]=frutas
console.log(a);

const [fruta1,fruta2]=frutas */
const frutas = ['manzana', 'pera', 'banana', 'uva', 'cereza', 'durazno']
const frutas2 = ['naranja', 'pomelo', 'mandarina']

const precios = [10,150,2000,12,14,36];

/* let precioMaximo = Math.min(...precios);
console.log(precioMaximo) */

const muchosArrays = [...frutas,...frutas2,...precios];
console.log(muchosArrays);

const objArrays ={
    ...muchosArrays
}

console.log(objArrays);