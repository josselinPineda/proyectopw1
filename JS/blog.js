document.querySelectorAll('.articulos article').forEach((article) => {
    // Crear el texto adicional y ocultarlo inicialmente
    const moreText = document.createElement('div');
    moreText.textContent = "La Cruz Roja también lleva a cabo campañas educativas y de sensibilización sobre diversos temas de salud, bienestar, y derechos humanos. A través de programas de prevención, buscamos reducir el impacto de los desastres y mejorar la calidad de vida de las comunidades vulnerables.";
    moreText.classList.add('hidden'); // Aplica la clase para ocultarlo
    article.appendChild(moreText);

    // Crear el enlace "Leer más"
    const readMoreLink = document.createElement('a');
    readMoreLink.textContent = 'Leer más';
    readMoreLink.href = '#';
    readMoreLink.classList.add('read-more'); // Aplica la clase para estilo
    article.appendChild(readMoreLink);

    // Agregar funcionalidad al enlace
    readMoreLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar comportamiento predeterminado del enlace
        const isHidden = moreText.classList.toggle('hidden'); // Alternar visibilidad
        readMoreLink.textContent = isHidden ? 'Leer más' : 'Leer menos';
    });
});
