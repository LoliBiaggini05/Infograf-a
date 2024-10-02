const botonesAudio = document.querySelectorAll('[id^="boton-audio"]');
const audios = document.querySelectorAll('audio');

// Recorrer cada botón y añadir el evento 'click'
botonesAudio.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    const audio = audios[index];  // Obtener el audio correspondiente

    // Comprobar si el audio está reproduciéndose
    if (audio.paused) {
      audio.play();  // Reproducir el audio si está pausado
      boton.src = "img/pausa.png";  // Cambiar imagen a "pausa"
    } else {
      audio.pause();  // Pausar el audio si está reproduciéndose
      boton.src = "img/flecha.png";  // Volver a la imagen original
    }
  });
});
