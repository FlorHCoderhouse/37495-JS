class Producto {
    constructor(nombre, precio, categoria) {

        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.vendido = false;
    }

    sumarIVA() {
        this.precio = this.precio * 1.21;
    }

    vender(){
        this.vendido=true;
    }


}

const producto1 = new Producto('manzana',250,'frutas');
console.log(producto1)
producto1.sumarIVA()
console.log('El precio con IVA es ' + producto1.precio);

producto1.vender();
console.log(producto1.vendido);