let lastScrollY = window.scrollY; 
const header = document.querySelector('.headercontainer'); 

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; 

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
    
        header.classList.add('hidden');
    } else if (currentScrollY < lastScrollY) {
       
        header.classList.remove('hidden');
    }

    
    lastScrollY = currentScrollY;
});


const backToTopButton = document.querySelector('.backtotop');
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};