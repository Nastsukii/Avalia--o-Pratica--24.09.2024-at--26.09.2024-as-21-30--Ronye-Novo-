let currentIndex = 0;
let autoSlideInterval;
let totalImages;

function menuStart(){
    const apagarCarrosel = document.querySelector('.carrosel') 
    apagarCarrosel.style.display =apagarCarrosel.style.display === 'none' ? 'block' : 'none';
}

function moveCarrosel(direction) {
    const images = document.querySelector('.carrosel-imgs');
    
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
    moveCarrosel(1); // Move para a próxima imagem
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
    const images = document.querySelector('.carrosel-imgs');
    totalImages = images.querySelectorAll('img').length;

    startAutoSlide();

    // Adiciona eventos para parar e reiniciar o autoSlide ao passar o mouse
    const carrosel = document.querySelector('.carrosel');
    carrosel.addEventListener('mouseenter', stopAutoSlide);
    carrosel.addEventListener('mouseleave', startAutoSlide);

    // Adiciona eventos de clique aos botões
    document.querySelector('.back').addEventListener('click', () => moveCarrosel(-1));
    document.querySelector('.next').addEventListener('click', () => moveCarrosel(1));
};

