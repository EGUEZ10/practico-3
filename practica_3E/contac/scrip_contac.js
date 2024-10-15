function validarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validación básica
    if (nombre && apellido && correo && telefono && descripcion) {
        // Mostrar ventana emergente con los datos
        const resultado = `
            <h3>Datos Validados</h3>
            <table border="1" style="width: 100%; text-align: left;">
                <tr>
                    <th>Campo</th>
                    <th>Valor</th>
                </tr>
                <tr>
                    <td>Nombre</td>
                    <td>${nombre}</td>
                </tr>
                <tr>
                    <td>Apellido</td>
                    <td>${apellido}</td>
                </tr>
                <tr>
                    <td>Correo</td>
                    <td>${correo}</td>
                </tr>
                <tr>
                    <td>Teléfono</td>
                    <td>${telefono}</td>
                </tr>
                <tr>
                    <td>Descripción</td>
                    <td>${descripcion}</td>
                </tr>
            </table>
        `;
        document.getElementById('resultado').innerHTML = resultado;
        document.getElementById('resultado').style.display = 'block';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
