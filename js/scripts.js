document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;
    let intervalId;

    // Botones de control
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
    const carouselContainer = document.querySelector('.carousel-container');

    // Actualiza el carrusel
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Mover al siguiente ítem
    function moveToNextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
        resetInterval();
    }

    // Mover al ítem anterior
    function moveToPrevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
        resetInterval();
    }

    // Reiniciar el intervalo de tiempo
    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(moveToNextItem, 5000);
    }

    // Pausar el carrusel al pasar el cursor sobre él
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Reanudar el carrusel al quitar el cursor
    carouselContainer.addEventListener('mouseleave', () => {
        resetInterval();
    });

    // Iniciar el carrusel automáticamente cada 6 segundos
    intervalId = setInterval(moveToNextItem, 5000);

    // Escuchar los eventos de clic en los botones de control
    prevButton.addEventListener('click', moveToPrevItem);
    nextButton.addEventListener('click', moveToNextItem);
});