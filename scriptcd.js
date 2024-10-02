document.addEventListener("DOMContentLoaded", function() {
    const nuevaImagen = 'img/cd-con-datos.png'; // Ruta de la nueva imagen
    const imagen = document.getElementById('cdAnimacionImg');
    const contenedorNuevaImagen = document.getElementById('contenedorNuevaImagen');
    const contenedorSecuenciaImagenes = document.getElementById('contenedorSecuenciaImagenes');

    // Cambiar la imagen original después de un tiempo
    setTimeout(function() {
        imagen.classList.add('fade-out');

        setTimeout(function() {
            imagen.src = nuevaImagen;
            imagen.classList.remove('fade-out');

            // Crear una nueva imagen rotada y agregarla
            const nuevaImagenElement = document.createElement('img');
            nuevaImagenElement.src = 'img/flechaAbajo.png'; // Ruta de la nueva imagen rotada
            nuevaImagenElement.alt = 'Nueva Imagen';

            // Agregar la nueva imagen al contenedor
            contenedorNuevaImagen.appendChild(nuevaImagenElement);

            // Añadir evento de clic a la nueva imagen
            nuevaImagenElement.addEventListener('click', function() {
                console.log('Imagen clickeada'); // Verifica que el clic funcione
                contenedorSecuenciaImagenes.style.display = 'block'; // Mostrar el contenedor de la secuencia
                mostrarSecuenciaImagenes();
            });

        }, 1000); // Debe coincidir con el tiempo de la transición en CSS
    }, 1000); // Tiempo de espera antes de cambiar la imagen original

    // Función para mostrar las 4 imágenes secuencialmente
    function mostrarSecuenciaImagenes() {
        const imagenes = [
            document.getElementById('imagen1'),
            document.getElementById('imagen2'),
            document.getElementById('imagen3'),
            document.getElementById('imagen4')
        ];

        let indiceActual = 0;
        const intervaloTiempo = 2000; // Tiempo en milisegundos para cambiar entre imágenes

        // Función para cambiar la imagen
        function cambiarImagen() {
            // Ocultar todas las imágenes
            imagenes.forEach(imagen => {
                imagen.style.opacity = '0';
            });

            // Mostrar la imagen actual
            imagenes[indiceActual].style.opacity = '1';

            // Mover al siguiente índice, detener si es necesario
            indiceActual = (indiceActual + 1) % imagenes.length;

            // Detener el intervalo cuando se han mostrado todas las imágenes
            if (indiceActual === 0) {
                clearInterval(intervalo); // Detener el intervalo
            }
        }

        // Iniciar la secuencia con un intervalo
        cambiarImagen(); // Mostrar la primera imagen inmediatamente
        const intervalo = setInterval(cambiarImagen, intervaloTiempo); // Cambiar cada 2 segundos
    }
});