document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad del carrusel
    let currentIndex = 0;  // Índice inicial para la imagen actual
    const images = document.querySelectorAll('.imagen');  // Seleccionamos todas las imágenes dentro del carrusel
    const totalImages = images.length;  // Número total de imágenes

    // Función para actualizar el carrusel
    function updateCarousel() {
        const newTransformValue = `translateX(-${currentIndex * 100}%)`; // Desplazamos el carrusel
        document.querySelector('.carrusel').style.transform = newTransformValue; // Aplicamos el movimiento
    }

    // Evento para el botón "Next"
    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;  // Mueve a la siguiente imagen (circular)
        updateCarousel();  // Actualizamos el carrusel
    });

    // Evento para el botón "Prev"
    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;  // Mueve a la imagen anterior (circular)
        updateCarousel();  // Actualizamos el carrusel
    });

    // Funcionalidad para el enlace activo del menú
    const links = document.querySelectorAll('header nav ul li a');
    
    links.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
