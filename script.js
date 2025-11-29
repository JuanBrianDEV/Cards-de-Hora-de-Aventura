const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const season = this.dataset.season;
        const episode = this.dataset.episode;
        const title = this.dataset.title;
        
        const info = document.getElementById('info');
        info.innerHTML = `
            <p><strong>Temporada:</strong> ${season}</p>
            <p><strong>Episódio:</strong> ${episode}</p>
            <p><strong>Título:</strong> ${title}</p>
        `;
    });
});



