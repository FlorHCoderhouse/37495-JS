//array de objetos "cuenta"
const cuentasUsuarioNuevo = [{
    tipo: 'pesos',
    simbolo: '$',
    numero: '120485',
    saldo: 50000
}, {
    tipo: 'dolares',
    simbolo: 'u$s',
    numero: '220007',
    saldo: 87
},
{
    tipo: 'pesos',
    simbolo: '$',
    numero: '120500',
    saldo: 23000
},
{
    tipo: 'pesos',
    simbolo: '$',
    numero: '120930',
    saldo: 85500
}, {
    tipo: 'dolares',
    simbolo: 'u$s',
    numero: '220485',
    saldo: 1000
},
{
    tipo: 'dolares',
    simbolo: 'u$s',
    numero: '221501',
    saldo: 230
}
]

//Elementos que usaré del DOM
const btnSiguiente = document.getElementById('btnSiguiente'),
    btnCancelar = document.getElementById('btnCancelar'),
    btnUltima = document.getElementById('btnUltima'),
    btnVolver = document.getElementById('btnVolver'),
    formDatos = document.getElementById('ingresoDatosPF'),
    monto = document.getElementById('monto'),
    dias = document.getElementById('dias'),
    tipoPF = document.getElementById('tipoPF'),
    cuentas = document.getElementById('cuentas'),
    checkDatos = document.getElementById('guardarDatos'),
    cardIngreso = document.querySelector('.cardIngreso'),
    confirmacion = document.querySelector('.confirmacion'),
    tasaPesos = 0.53,
    tasaDolares = 0.01;

class PF {

    constructor(monto, dias, tipoPF, numeroCuenta) {
        this.monto = parseFloat(monto);
        this.dias = parseInt(dias);
        this.tipoPF = tipoPF;
        this.numeroCuenta = numeroCuenta;
    }

}

window.onload = mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, tipoPF.value));

function elegirTipoCuenta(cuentasUsuario, tipo) {
    const cuentas = cuentasUsuario.filter(cuenta => cuenta.tipo == tipo);
    return cuentas;
}

function mostrarCuentas(cuentasUsuario) {
    for (const cuenta of cuentasUsuario) {
        let option = `<option value="${cuenta.numero}" id="cuenta${cuenta.numero}">CA ${cuenta.simbolo} Nº ${cuenta.numero} - ${cuenta.simbolo} ${cuenta.saldo}</option>`;

        cuentas.innerHTML += option;
    }

}

tipoPF.onchange = () => {
    cuentas.innerHTML = '';
    mostrarCuentas(elegirTipoCuenta(cuentasUsuarioNuevo, tipoPF.value));
}

function crearObjetoPF() {
    return new PF(monto.value, dias.value, tipoPF.value, cuentas.value)
}

function guardarPFenStorage(pf) {
    localStorage.setItem('plazoFijo', JSON.stringify(pf));
}

function recuperarPFDeStorage(pf) {
    let plazoFijo = JSON.parse(localStorage.getItem(pf));
/*     if (plazoFijo == null) {
        return false;
    } else {
        return plazoFijo;
    } */

    plazoFijo==null ? false : plazoFijo;
}

function calcularIntereses(pf, tasaPesos, tasaDolares) {
    let intereses;
    if (pf.tipoPF == 'pesos') {
        intereses = (pf.monto * (tasaPesos / 365 * pf.dias));
        intereses = parseFloat(intereses.toFixed(2));
    } else {
        intereses = (pf.monto * (tasaDolares / 365 * pf.dias));
        intereses = parseFloat(intereses.toFixed(2));
    }

    return intereses;
}

function calcularGananciaTotal(intereses, capital) {
    return intereses + capital;
}

function calcularFechaAcreditacion(pf) {
    let acreditacion = new Date();
    acreditacion.setDate(acreditacion.getDate() + pf.dias);
    return acreditacion.toLocaleDateString();
}

function mostrarCalculado(pf) {
    const fecha = calcularFechaAcreditacion(pf);
    const intereses = calcularIntereses(pf, tasaPesos, tasaDolares);
    const total = calcularGananciaTotal(intereses, pf.monto);

    return resultado = {
        'acreditacion': fecha,
        'intereses': intereses,
        'total': total
    };
}

function crearHTMLInfoUsuario(pf, calculos) {
    let lista = confirmacion.querySelector('ul');
    let items = [];
    for (const dato in pf) {
        let li = ` <li>${dato}: ${pf[dato]}</li>`;
        items.push(li);
    }

    for (const dato in calculos) {
        let li = ` <li>${dato}: ${calculos[dato]}</li>`;
        items.push(li);

    }

    for (const item of items) {
        lista.insertAdjacentHTML('beforeend', item);
    }

}

//Las acciones a realizarse al clickear en el botón "siguiente"

btnSiguiente.addEventListener('click', () => {
    const datosPF = crearObjetoPF();
    if (checkDatos.checked) {
        guardarPFenStorage(datosPF);
    }

    cardIngreso.classList.replace('visible', 'oculta');
    confirmacion.classList.replace('oculta', 'visible');
    crearHTMLInfoUsuario(datosPF, mostrarCalculado(datosPF));
    formDatos.reset();

});

btnCancelar.addEventListener('click',()=>{
    formDatos.reset();
});

btnVolver.addEventListener('click', () => {
    confirmacion.classList.replace('visible', 'oculta');
    cardIngreso.classList.replace('oculta', 'visible');
    confirmacion.querySelector('ul').innerHTML = '';
});

btnUltima.addEventListener('click',()=>{
    let guardado = recuperarPFDeStorage('plazoFijo');

    if(!guardado){
        alert('No se encontraron datos previos');
    }else{
        cardIngreso.classList.replace('visible', 'oculta');
        confirmacion.classList.replace('oculta', 'visible');
        crearHTMLInfoUsuario(guardado, mostrarCalculado(guardado));
        formDatos.reset();
    }

})