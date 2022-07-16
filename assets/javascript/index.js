console.log("1. Вёрстка соответствует макету. Ширина экрана 390px +48: 48; \n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15: 15; \n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22: 2;");


const mediaMenuOutline = document.querySelector('.media_menu_outline');
    if (mediaMenuOutline) {
const burgerMenu = document.querySelector('.burger_menu');
        mediaMenuOutline.addEventListener("click", function(e) {
            burgerMenu.classList.toggle('_active');
        })

const burgerMenuClosed = document.querySelector('.burger_menu_closed');
    if (burgerMenuClosed) {
const burger_menu_closed = document.querySelector('.burger_menu');
        burgerMenuClosed.addEventListener("click", function(e) {
                burgerMenu.classList.remove('_active');
        })
        
    }
}