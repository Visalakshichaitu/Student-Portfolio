const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-content', {});
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.about-content', {});
sr.reveal('.about-img', { delay: 400 });
sr.reveal('.services-container', {});
sr.reveal('.portfolio-container', {});
sr.reveal('.contact form', {});