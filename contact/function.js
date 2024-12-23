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


/*with the help of chatgpt*/
const backToTopButton = document.querySelector('.backtotop');
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const images = document.querySelectorAll('.imgae');

images.forEach(img => {
    const originalSrc = img.style.backgroundImage; 
    const hoverSrc = img.querySelector('.img-hover').getAttribute('data-hover'); 

    img.addEventListener('mouseover', () => {
        img.style.backgroundImage = `url(${hoverSrc})`; 
    });

    img.addEventListener('mouseout', () => {
        img.style.backgroundImage = originalSrc; 
    });
});

