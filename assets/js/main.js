document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav'); // Or use #main-nav-ul if preferred

    if (hamburgerButton && mainNav) {
        hamburgerButton.addEventListener('click', () => {
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true' || false;
            hamburgerButton.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('nav-active');
            hamburgerButton.classList.toggle('active');
            
            // Optional: Toggle body class to prevent scrolling when menu is open
            // document.body.classList.toggle('no-scroll'); 
        });
    }
}); 