const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav.menu');

    // Evento para abrir/cerrar el menú
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });