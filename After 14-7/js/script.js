//Clase para los objetos libro
class Libro {

    constructor(titulo, autor, anio, genero, valoracion, id) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
        this.valoracion = valoracion;
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = valoracion;
    }
}

//Nuestro array de libros hardcodeado. Algo así como nuestra mock database 
const libros = [
    new Libro('American Gods', 'Neil Gaiman', 2001, 'Fantasía', 6, 1),
    new Libro('Némesis', 'Agatha Christie', 1971, 'Misterio', 8, 2),
    new Libro('Los elefantes pueden recordar', 'Agatha Christie', 1972, 'Misterio', 7, 3),
    new Libro('David Copperfield', 'Charles Dickens', 1950, 'Novela', 8, 4),
    new Libro('Narciso y Golmundo', 'Hermann Hesse', 1930, 'Novela', 9, 5),
    new Libro('Los Borgia', 'Mario Puzo', 2001, 'Novela histórica', 9, 6),
    new Libro('El Hobbit', 'J.R.R. Tolkien', 1937, 'Novela fantástica', 10, 7)
]

//console.log(libros);



//--------------------------Pedir que se ingresen libros nuevos y sumarlos al array-----------------------------//
let continuar = true;

while (continuar) {
    let ingreso = prompt('Ingresa los datos del libro: titulo, autor, año, género, puntaje de 1 a 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    //Dividimos el string ingreso en elementos de un array
    let datos = ingreso.split('/');
    //console.log(datos);
    //usamos los elementos del array datos apra crear el objet libro
    const libro = new Libro(datos[0], datos[1], parseInt(datos[2]), datos[3], parseInt(datos[4]));
    //lo sumamos al array de libros
    libros.push(libro);

    //le asignamos el id en base a lalongitud del array libros
    libro.asignarId(libros);

    //console.log(libros)
}
//--------------------------Fin de pedir que se ingresen libros nuevos y sumarlos al array-----------------------------//



//--------------------------Ordenar el array de acuerdo a lo que se elija-----------------------------//
let criterio = parseInt(prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Más viejo a más nuevo)'));

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case 1:
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
            return nombreAscendente;
        case 2:
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        case 3:
            let valoracionDescendente = arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);
            return valoracionDescendente;
        case 4:
            let anioAscendente = arrayOrdenado.sort((a, b) => a.anio - b.anio);
            return anioAscendente;
        default:
            alert('No es un criterio válido');
            break;
    }

}
//--------------------------Fin de ordenar el array de acuerdo a lo que se elija-----------------------------//



//--------------------------Crear el string con los resultados-----------------------------//
function mostrar(array){
    let info ='';

    array.forEach(elemento=>{
        info += 'Título: ' + elemento.titulo + '\nAutor: ' + elemento.autor + '\nAño de publicación: ' + elemento.anio + '\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
    });

    return info;
}
//--------------------------Fin de crear el string con los resultados-----------------------------//


alert(mostrar(ordenar(criterio,libros)));


//--------------------------Filtrar libros de acuerdo al autor-----------------------------//
let autorElegido = prompt('Escribí el nombre del autor para que te mostremos sus libros');

const filtrado = libros.filter((libro)=>libro.autor.toLowerCase().includes(autorElegido.toLowerCase()));
//--------------------------Fin de filtrar libros de acuerdo al autor-----------------------------//



//--------------------------Mostrar libros filtrado de acuerdo al autor-----------------------------//
if(filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo');
}else{
    const imprimible= filtrado.map((libro)=>libro.titulo);
    alert('Loslibros de nuestro catálogo, de autores que coinciden parcial o totalmente con esta búsqueda, son:\n- ' + imprimible.join('\n- '));
}
//--------------------------Fin de mostrar libros filtrado de acuerdo al autor-----------------------------//


/* Cosas a mejorar:
1 -Que podamos volver a elegir un criterio de ordenamiento una vez que vimos el primer resultado del sort
2 -que podamos volver a elegir un autor una vez que vimos el primer resultado del filter
ambas cuestiones se pueden resolver con ciclos condicionales */