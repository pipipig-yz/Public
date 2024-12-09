
document.querySelectorAll('img').forEach(function(img) {
   
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});


//with the help of chatgpt to do the modal image

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");


document.querySelectorAll(".image").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex"; 
        modalImage.src = img.src; 
    });
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});


modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
