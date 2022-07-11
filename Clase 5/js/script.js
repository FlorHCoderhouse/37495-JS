/* let nombre = "Homero";
let apellido = "Simpson";
let calle = "Av Siempreviva 742";
let edad = 38;

let nombre2= "Marge";
let apellido2= "Bouvier";
let calle2 = "Av Siempreviva 742";
let edad2 = 38; */

const personaje1 = {
    nombre: "Homero",
    apellido: "Simpson",
    calle: "Av Siempreviva 742",
    edad: 38,
    peso: 95
}

const personaje2 = {
    nombre: "Marge",
    apellido: "Bouvier",
    calle: "Av Siempreviva 742",
    edad: 38,
    esSoltero: false,
    hijos: {
        primer: "Bart",
        segundo: "Lisa",
        tercero: "Maggie"
    }
}

//alert(personaje1.nombre)
//alert(personaje2.hijos.primer)

//alert(personaje1['calle'])


personaje1.peso = 150
personaje1['edad'] = 39

/* const producto1 = {
    nombre: 'Pan',
    cantidad: 1
} */

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const personaje3 = new Personaje('Bart','Simpson',10)
const personaje4 = new Personaje('Simpson','Lisa',8,'extra')
const personaje5 = new Personaje('Maggie')


function Auto(marca,modelo,anio,puertas){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.puertas = puertas;

    this.hablar = function(){
        console.log('Hola, soy '+this.modelo)
    }

    
}

/* const auto1 = new Auto('Fiat','Palio',2010,3);

auto1.hablar()
auto2.hablar() */

/* let marcaUser = prompt('Ingresa la marca de tu auto').toUpperCase();
let modeloUser = prompt('Ingresa el modelo de tu auto');
let anioUser = parseInt(prompt('Ingresa el año de tu auto'));
let puertasUser = parseInt(prompt('Ingresa la cantidad de puertas de tu auto'));

const auto3 = new Auto(marcaUser,modeloUser,anioUser); */

//auto3.hablar()
auto3 = new Auto('Ford','ranger',2000
)
if(!'puertas' in auto3){
   
    console.log('No existe la propiedad');
}else{
    console.log(auto3.puertas);
} 
const auto2 = new Auto('Toyota', 'Etios', 2014, 4)

console.log("puertas" in auto2);
console.log("patente" in auto2);

for (const propiedad in auto2){
    console.log(auto2[propiedad]);
}

