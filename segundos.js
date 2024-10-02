function cambiarImagen() {
    const img = document.getElementById('mensaje');
    const flecha = document.getElementById('flecha-msj-4');
    

    img.src = 'img/msj4.png';
    
  
    if (img.src.includes('msj4.png')) {
        flecha.style.display = 'block';
    }
}

setTimeout(cambiarImagen, 2000); 

function cambiarImagen() {
    window.location.href = "msj5.html"
}

setTimeout(cambiarImagen, 4000); 