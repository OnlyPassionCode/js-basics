document.addEventListener("DOMContentLoaded", () => {
    
    const carousel = document.getElementById('kevin-carousel');
    const items = carousel.children;
    
});

function moveItems(items){
    for(const item of items){
        item.style.translate = "-310px 0";
    }
}