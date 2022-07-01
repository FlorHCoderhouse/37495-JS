//Login
let savedPIN = '7886';
let ingresar = false;

for (let i = 2; i >= 0; i--) {
    let userPIN = prompt('Ingresa tu pin. Tenés ' + (i + 1) + ' intentos');
    if (savedPIN == userPIN) {
        alert('Login exitoso');
        ingresar = true;
        break;
    } else {
        alert('Error. Te quedan ' + i + ' intentos.')
    }

}



if (ingresar) {
    //Loop de opciones del cajero
    let saldo = 1000;

    let opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') { 
        switch (opcion) {
            case '1':
                alert('Tu saldo es u$s ' + saldo);
                break;
            case '2':
                let retiro = parseFloat(prompt("Ingresa cantidad a retirar"));
                if (retiro <= saldo) {
                    saldo = saldo - retiro;
                    alert('Tu nuevo saldo es u$s ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;
            case '3':
                let deposito = parseFloat(prompt('Ingresa monto a depositar'));
                saldo = saldo + deposito;
                alert('Tu nuevo saldo es u$s ' + saldo);
                break;

            default:
                alert('Elegiste una opción inválida');
                break;
        }
        opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.');
    }


} else {
    //aviso de bloqueo de tarjeta
    alert('Retendremos tu tarjeta por seguridad');
}