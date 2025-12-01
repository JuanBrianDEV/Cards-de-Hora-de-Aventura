// Lightbox para visualizar imagens em tamanho grande
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

// Abrir lightbox ao clicar na imagem
lightboxTriggers.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.classList.add('active');
        lightboxImage.src = this.src;
        lightboxCaption.textContent = this.alt || '';
    });
});

// Fechar lightbox ao clicar no X
lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('active');
});

// Fechar lightbox ao clicar fora da imagem
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Fechar lightbox ao pressionar Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});
