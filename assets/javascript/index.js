console.log("1. Вёрстка соответствует макету. Ширина экрана 390px +48: 48; \n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15: 15; \n3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22: 2;");



function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.media_menu_outline');
    let links = menu.find('.burger_menu_link');
    let overlay = menu.find('.burger_menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger_menu');
      
      if (menu.hasClass('burger_menu')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }

  let elem = document.getElementById('menu');
  burgerMenu(elem);