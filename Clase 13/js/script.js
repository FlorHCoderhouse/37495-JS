const btnSwal = document.getElementById('botonSwal');
const btnToast = document.getElementById('botonToast');
let carrito = ['papas', 'pepinos', 'manzanas', 'naranjas', 'zucchini']



Swal.fire({
    title: 'Bienvenida',
    text: 'Te damos la bienvenida a nuestra app',
    icon: 'info',
    iconColor: '#81f40e',
    confirmButtonText: 'Gracias',
    position: 'top-center'
})

btnSwal.addEventListener('click', () => {

    Swal.fire(
        {
            title: 'Eliminar producto',
            text: '¿Está seguro de eliminar el producto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, seguro',
            cancelButtonText: 'No, no quiero'

        }
    ).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                text: 'El producto ha sido borrado'
            })
        }
    })

})

btnToast.onclick = () => {

    Toastify({
        text: `Tenés ${carrito.length} productos en tu carrito`,
        duration: 1500,
        style: {
            background: "radial-gradient(circle, rgba(235,0,255,1) 10%, rgba(86,9,121,1) 65%, rgba(68,0,50,1) 93%)", //Este gradiente lo hice con https://cssgradient.io/
            color: 'white',
            width: '300px',
            height: '80px',
        },
        offset: {
            x: '10%',
            y: 300,
        }, onClick: () => {
            Toastify({
                text: 'Clickeaste un toast, yo te llevo a wikipedia',
                duration: 1000,
                position: 'left',
                destination: 'https://wikipedia.org'
            }).showToast();
        }
    }).showToast();
}


const DateTime = luxon.DateTime;

const ahora = DateTime.now();
//console.log(ahora);

const dt = DateTime.local(2022, 12, 8, 12, 15);
//console.log(dt);

console.log(ahora.toString());
console.log(ahora.toLocaleString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
console.log(ahora.toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_SIMPLE));

const parrafo = document.getElementById('horaActual');

/* parrafo.innerText = ahora.toLocaleString(DateTime.TIME_SIMPLE);  */


//Ejemplo integrador de librerías
const btnCalcular = document.getElementById('calcular');

window.onload = () => {
    let dates = document.querySelectorAll('input[type="date"]');
    let inicio = DateTime.now().toFormat('yyyy-MM-dd');
    let fin = DateTime.now().plus({ months: 4 }).toFormat('yyyy-MM-dd');
    dates.forEach(element => {
        element.setAttribute("min", inicio);
        element.setAttribute("max", fin);

    });

}

function calcularEstadia(checkIn, checkOut) {
    let total = checkOut.diff(checkIn);
    return total.as('days');

}

function calcularPrecioTotal(estadia, precio) {
    return estadia * precio;
}
btnCalcular.addEventListener('click', () => {
    let checkIn = DateTime.fromISO(document.getElementById('checkIn').value);
    let checkOut = DateTime.fromISO(document.getElementById('checkOut').value);
    let estadia = calcularEstadia(checkIn, checkOut);
    let precioTotal = calcularPrecioTotal(estadia, 2000);
    Swal.fire({
        title: 'Resultado',
        text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
        icon: 'info',
        iconColor: '#00ff00',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        position: 'top-center'
    })

})


