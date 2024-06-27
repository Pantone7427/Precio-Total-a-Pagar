// Función para calcular el precio total
function calcularPrecioTotal(precio, iva) {
    var montoIVA = (precio * iva) / 100;
    var precioTotal = precio + montoIVA;
    return precioTotal;
}

// Función para mostrar el precio total
function mostrarPrecioTotal() {
    var precio = parseFloat(document.getElementById('precio').value);
    var iva = parseFloat(document.getElementById('iva').value);

    if (isNaN(precio) || isNaN(iva)) {
        document.getElementById('resultado').innerText = 'Por favor, ingrese valores válidos.';
    } else {
        var precioTotal = calcularPrecioTotal(precio, iva);
        document.getElementById('resultado').innerText = 'El precio total a pagar es: ' + precioTotal.toFixed(2);
    }
}