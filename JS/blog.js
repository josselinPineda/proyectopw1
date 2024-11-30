const articles = document.querySelectorAll('.articulos article');

articles.forEach((article) => {

    const moreText = document.createElement('div');
    moreText.textContent = "La Cruz Roja también lleva a cabo campañas educativas y de sensibilización sobre diversos temas de salud, bienestar, y derechos humanos. A través de programas de prevención, buscamos reducir el impacto de los desastres y mejorar la calidad de vida de las comunidades vulnerables.";
    moreText.style.display = 'none'; // 
    article.appendChild(moreText);

    const readMoreLink = document.createElement('a');
    readMoreLink.textContent = 'Leer más';
    readMoreLink.href = '#';
    readMoreLink.style.color = '#b30000';
    article.appendChild(readMoreLink);

    readMoreLink.addEventListener('click', (e) => {
        e.preventDefault(); 

        if (moreText.style.display === 'none') {
            moreText.style.display = 'block';
            readMoreLink.textContent = 'Leer menos';
        } else {
            moreText.style.display = 'none';
            readMoreLink.textContent = 'Leer más'; 
        }
    });
});
