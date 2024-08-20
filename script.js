document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector('.rain');
    const rainAudio = document.getElementById('rainAudio');

    // Memutar audio secara otomatis
    rainAudio.play().catch(error => {
        console.log('Autoplay audio tidak diizinkan: ', error);
    });

    function createDrop() {
        const drop = document.createElement('div');
        drop.className = 'drop';
        const xPos = Math.random() * window.innerWidth;
        const delay = Math.random() * 5;
        const duration = 1 + Math.random() * 3;

        drop.style.left = `${xPos}px`;
        drop.style.animationDuration = `${duration}s`;
        drop.style.animationDelay = `-${delay}s`;

        rainContainer.appendChild(drop);

        // Remove the drop after animation ends
        drop.addEventListener('animationend', () => {
            drop.remove();
        });
    }

    // Create raindrops at intervals
    setInterval(createDrop, 100);
});
