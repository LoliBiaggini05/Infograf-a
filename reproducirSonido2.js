// Seleccionar los elementos del DOM
const botonAudio = document.getElementById('boton-audio2');
const audio = document.getElementById('audio2');

// Añadir un evento 'click' al botón
botonAudio.addEventListener('click', () => {
  // Comprobar si el audio está reproduciéndose
  if (audio.paused) {
    audio.play();  // Reproducir el audio si está pausado
    botonAudio.src = "img/pausa.png";  // Cambiar imagen a "pausa" (opcional)
  } else {
    audio.pause();  // Pausar el audio si está reproduciéndose
    botonAudio.src = "img/flecha.png";  // Volver a la imagen original (opcional)
  }
});