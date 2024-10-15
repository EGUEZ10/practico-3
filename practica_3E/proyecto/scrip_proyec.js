// Lógica del carrusel
function moveSlide(direction, carouselId) {
    const carouselContainer = document.querySelector(`#${carouselId} .carousel-container`);
    const items = carouselContainer.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    currentIndex += direction;

    // Restringe el índice para que no exceda el rango
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Actualiza la visualización
    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');

    // Actualiza el desplazamiento
    const offset = -currentIndex * 100; // Desplazamiento negativo
    carouselContainer.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

// Abrir modal
function openModal(title, image, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modal').style.display = 'block'; // Muestra el modal
}

// Cerrar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none'; // Oculta el modal
}
