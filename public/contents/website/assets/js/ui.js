
// card 3 - 3D Tilt Effect with Shine
const cards = document.querySelectorAll('.card3-wrap');

cards.forEach(card => {
    const inner = card.querySelector('.card3');
    const shine = card.querySelector('.card3-shine');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        shine.style.opacity = 1;
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25), transparent 60%)`;
    });

    card.addEventListener('mouseleave', () => {
        inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
        shine.style.opacity = 0;
    });
});