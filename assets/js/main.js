document.addEventListener("DOMContentLoaded", function(event) { 



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