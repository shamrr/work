let menuButton = document.querySelector('.burger-btn');
let menu = document.querySelector('.menu-body');
let overlay = document.querySelector('.burger-menu-over');
menuButton.addEventListener("click", function(){
    menuButton.classList.toggle('_active');
    menu.classList.toggle('_active');
    overlay.classList.toggle('_overlay');
})

console.log("1) Верстка соотвествует макету +41\n2) +15\n3) +18\nИтого: 74")