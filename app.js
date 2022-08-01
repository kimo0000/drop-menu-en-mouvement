let menu = document.querySelector('nav');
let close = document.querySelector('.btn_close');
let buttonClose = document.querySelectorAll('.btn_close span');


close.addEventListener('click', function() {
    menu.classList.toggle('toggle_menu');

        buttonClose.forEach(span => {
            if(menu.classList.contains('toggle_menu')) {
               span.classList.add('button_close');
            } else {
                span.classList.remove('button_close');
            }
        })
})


