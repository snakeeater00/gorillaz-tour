const buyButtons = document.querySelectorAll('.buy, .ticket-btn');

buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Билеты скоро будут доступны 🎟️');
    });
});

const trailerBtn = document.querySelector('.trailer');

if (trailerBtn) {
    trailerBtn.addEventListener('click', () => {
        window.open('https://youtu.be/HrgMiZDnEG0?si=MgijTXa7YS2lmkIE');
    });
}
