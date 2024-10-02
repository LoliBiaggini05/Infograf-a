function replaceWithImage(element, imageUrl) {
    // Encontrar el contenedor de la imagen dentro del elemento
    const imageContainer = element.querySelector('.image-container');

    // Crear un elemento de imagen
    const img = document.createElement('img');
    img.src = imageUrl;

    // Reemplazar el contenido del contenedor de la imagen con la nueva imagen
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);

    // Ajustar el tamaño del contenedor según el tamaño de la imagen
    img.onload = () => {
        // Ajustar el tamaño del div para que coincida con el tamaño de la imagen
        element.style.width = `${img.width}px`;
        element.style.height = `${img.height}px`;
    };
}

// Repetir para los otros elementos
function replaceWithImage2(element, imageUrl) {
    const imageContainer = element.querySelector('.image-container');
    const img = document.createElement('img');
    img.src = imageUrl;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    img.onload = () => {
        element.style.width = `${img.width}px`;
        element.style.height = `${img.height}px`;
    };
}

function replaceWithImage3(element, imageUrl) {
    const imageContainer = element.querySelector('.image-container');
    const img = document.createElement('img');
    img.src = imageUrl;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
    img.onload = () => {
        element.style.width = `${img.width}px`;
        element.style.height = `${img.height}px`;
    };
}