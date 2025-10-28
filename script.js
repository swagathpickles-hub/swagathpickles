// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // Add shadow on hover for product cards for a subtle interactive effect
    const productCards = document.querySelectorAll('.product-card');

    if (productCards) {
        productCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // We use the built-in shadow utility class from Bootstrap
                card.classList.add('shadow-lg');
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('shadow-lg');
            });
        });
    }

    // Optional: Smoothly fade in elements on load
    const fadeElements = document.querySelectorAll('main section');
    fadeElements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transition = `opacity 0.5s ease-in-out ${index * 100}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        }, 100); // Small delay to ensure styles are applied
    });

});
