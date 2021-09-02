
// slide close when any link will clicked 
let mobileSlider = document.querySelector('.mobile-menu');
function closeSlider() {
    mobileSlider.style.left = '-800px';
}

document.addEventListener("DOMContentLoaded", function(event) { 
// mobile slider 
let mobileMenuIcon = document.querySelector('.mobile-toggle-icon');
let closeButton = document.querySelector('.mobile-slider-close');
let body = document.querySelector('body');
let showPss = document.querySelector('.show-pass-icon');
var inputType = document.querySelector('#password');

mobileMenuIcon.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('button is clicked')
    mobileSlider.style.left = '0px';
    if ( mobileSlider.style.left = '0px') {
        body.style.overflow = 'hidden';
    }
})
closeButton.addEventListener('click', (e)=> {
    e.preventDefault();
    mobileSlider.style.left = '-800px';
    if ( mobileSlider.style.left < '500px') {
        body.style.overflow = 'auto';
    }
});
// Password show on click and hide 
if(!showPss) {
   return showPss= '';
}
showPss.addEventListener('mousedown', (e)=> {
    e.preventDefault();
    inputType.type = 'text';
})
showPss.addEventListener('mouseup', (e)=> {
    e.preventDefault();
    inputType.type = 'password';
})

// accordion 
let accordionHeader = document.querySelectorAll('.accordin-header');
accordionHeader.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
        event.preventDefault();
        if(event.target.tagName == 'DIV' ) {
            if(event.target.classList.contains('accordin-header')) {
                let button = event.target.nextElementSibling.classList.toggle('open');
                if(button) {
                    event.target.querySelector('i').classList.remove('fa-plus');
                    event.target.querySelector('i').classList.add('fa-minus');
                } else {
                    event.target.querySelector('i').classList.remove('fa-minus');
                    event.target.querySelector('i').classList.add('fa-plus'); 
                }
        } else {
                let button = event.target.parentNode.parentNode.nextElementSibling.classList.toggle('open');
                if(button) {
                    event.target.parentNode.parentNode.querySelector('i').classList.remove('fa-plus');
                    event.target.parentNode.parentNode.querySelector('i').classList.add('fa-minus');
                } else {
                    event.target.parentNode.parentNode.querySelector('i').classList.remove('fa-minus');
                    event.target.parentNode.parentNode.querySelector('i').classList.add('fa-plus'); 
                }
        }
    } else if (event.target.tagName == 'H2' ) {
            let button = event.target.parentNode.parentNode.parentNode.nextElementSibling.classList.toggle('open')
            if(button) {
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.remove('fa-plus');
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.add('fa-minus');
                } else {
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.remove('fa-minus');
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.add('fa-plus'); 
                }

    } else if(event.target.tagName == 'I') {
            let button = event.target.parentNode.parentNode.parentNode.nextElementSibling.classList.toggle('open');
             if(button) {
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.remove('fa-plus');
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.add('fa-minus');
                } else {
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.remove('fa-minus');
                    event.target.parentNode.parentNode.parentNode.querySelector('i').classList.add('fa-plus'); 
                }
        }
})
});











});