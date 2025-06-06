document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    const burgerBtn = document.querySelector('.navbar_burger');
    console.log('burgerBtn:', burgerBtn);
    
    if (burgerBtn) {
        console.log('Adding event listener...');
        burgerBtn.addEventListener('click', function() {
            console.log('Burger clicked!');
            const navMenu = document.querySelector('.navbar_menu');
            if (navMenu) {
                navMenu.classList.toggle('active');
            }
        });
    } else {
        console.log('Burger button not found');
    }
});