let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides; // Avança para o próximo slide
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Volta para o slide anterior
    updateSlider();
});

function updateSlider() {
    const offset = -currentSlide * 100; // Calcula o deslocamento
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Inicia o slider
updateSlider();
