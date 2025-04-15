document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Handle dropdown menus on mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            link.addEventListener('click', function(e) {
                // Only prevent default if we're in mobile view
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });
    }
    
    // Image popup functionality
    function openPopup(imgSrc) {
        document.getElementById('popup-img').src = imgSrc;
        document.getElementById('imagePopup').style.display = 'block';
    }
    
    function closePopup() {
        document.getElementById('imagePopup').style.display = 'none';
    }
    
    // Add event listeners for popup
    const popupImages = document.querySelectorAll('.gallery-image img');
    const closeButton = document.querySelector('.popup .close');
    
    if (popupImages.length > 0) {
        popupImages.forEach(img => {
            img.addEventListener('click', function() {
                openPopup(this.src);
            });
        });
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }
    
    // Close popup when clicking outside the image
    const popup = document.getElementById('imagePopup');
    if (popup) {
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                closePopup();
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup && popup.style.display === 'block') {
            closePopup();
        }
    });
});