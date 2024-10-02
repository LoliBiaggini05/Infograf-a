document.addEventListener("DOMContentLoaded", function() {
    const tiempoDeEspera = 1000; // Tiempo de espera antes de cambiar la imagen
    const nuevaImagen = 'img/cd-con-datos.png'; // Ruta de la nueva imagen
    const imagen = document.getElementById('cdAnimacionImg');
    const contenedorNuevaImagen = document.getElementById('contenedorNuevaImagen');

    // Cambiar la imagen después del tiempo de espera
    setTimeout(function() {
        imagen.classList.add('fade-out'); // Añade la clase para desvanecer la imagen

        // Espera el tiempo de la transición antes de cambiar la imagen
        setTimeout(function() {
            imagen.src = nuevaImagen;
            imagen.classList.remove('fade-out'); // Elimina la clase para permitir la transición de la nueva imagen

            // Crear y agregar la nueva imagen debajo
            const nuevaImagenElement = document.createElement('img');
            nuevaImagenElement.src = 'img/nueva-imagen.png'; // Ruta de la nueva imagen que puedes modificar
            nuevaImagenElement.alt = 'Nueva Imagen'; // Texto alternativo para la nueva imagen

            // Agregar la nueva imagen al contenedor sin afectar la imagen original
            contenedorNuevaImagen.appendChild(nuevaImagenElement);
        }, 1000); // Debe coincidir con el tiempo de la transición en CSS
    }, tiempoDeEspera);
});