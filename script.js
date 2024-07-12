document.addEventListener('DOMContentLoaded', function() {
    const reviewHolder = document.querySelector('.review-holder');
    const scrollLeft = document.querySelector('.scroll-left');
    const scrollRight = document.querySelector('.scroll-right');
    
    scrollLeft.addEventListener('click', function() {
        reviewHolder.scrollBy({
            left: -320, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });
    
    scrollRight.addEventListener('click', function() {
        reviewHolder.scrollBy({
            left: 320, // Adjust scroll distance as needed
            behavior: 'smooth'
        });
    });
});