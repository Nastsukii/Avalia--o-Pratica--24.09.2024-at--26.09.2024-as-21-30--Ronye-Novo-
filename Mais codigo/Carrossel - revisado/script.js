let currentIndex = 0;
let autoSlideInterval;
let totalImages;

function moveCarousel(direction) {
    const images = document.querySelector('.carousel-images');
    
    currentIndex += direction;

    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }

    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
    moveCarousel(1); // Move para a próxima imagem
}

// Função para iniciar o autoSlide
function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 3000); // 3000 ms = 3 segundos
}

// Função para parar o autoSlide ao passar o mouse
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Iniciar o carrossel ao carregar a página
window.onload = function() {
    const images = document.querySelector('.carousel-images');
    totalImages = images.querySelectorAll('img').length;

    startAutoSlide();

    // Adiciona eventos para parar e reiniciar o autoSlide ao passar o mouse
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Adiciona eventos de clique aos botões
    document.querySelector('.prev').addEventListener('click', () => moveCarousel(-1));
    document.querySelector('.next').addEventListener('click', () => moveCarousel(1));
};