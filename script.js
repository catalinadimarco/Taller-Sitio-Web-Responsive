document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.getElementById('carouselExampleControls');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000, // Cambiar cada 2 segundos
        pause: 'hover' // Pausar al pasar el mouse
    });
});