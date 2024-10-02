//boton detras del exito

document.getElementById('img1').addEventListener('click', function() {
    document.getElementById('detras-del-exito').scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
    });
});

//boton alcance

document.getElementById('img2').addEventListener('click', function() {
    document.getElementById('alcance-de-la-cancion').scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
    });
});

//boton repercsuiones

document.getElementById('img3').addEventListener('click', function() {
    document.getElementById('criticas').scrollIntoView({
        behavior: 'smooth' // Desplazamiento suave
    });
});


// cambio en los dialogos - nucleo 1 

 // Array para manejar los diálogos y la rotación de la flecha
 const dialogos = [
    { src: 'img/dialogo1.png', rotation: '0deg', flechaVisible: true },
    { src: 'img/dialogo2.png', rotation: '90deg', flechaVisible: true },
    { src: 'img/dialogo3.png', rotation: '0deg', flechaVisible: false }
];

let estado = 0; // Estado inicial (dialogo1)

document.getElementById('flecha').addEventListener('click', function() {
    estado = (estado + 1) % dialogos.length; // Avanza al siguiente diálogo

    // Cambia la imagen del diálogo y la rotación de la flecha
    document.getElementById('dialogo-imagen').src = dialogos[estado].src;
    document.getElementById('flecha').style.transform = `rotate(${dialogos[estado].rotation})`;

    // Muestra u oculta la flecha según el estado actual
    document.getElementById('flecha').style.display = dialogos[estado].flechaVisible ? 'block' : 'none';
});


//boton despedida
function irAlInicio() {
    document.getElementById('inicio').scrollIntoView({ behavior: 'smooth' });
}