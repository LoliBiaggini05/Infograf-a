function cambiarImagen() {
    const img = document.getElementById('mensaje-8');
    const dejar = document.getElementById('dejar');
    
  
    img.src = 'img/msj7.png';

    if (img.src.includes('msj7.png')) {
        dejar.style.display = 'block';
    }
    
}

setTimeout(cambiarImagen, 2000); 