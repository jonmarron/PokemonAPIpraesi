document.addEventListener('DOMContentLoaded', function(){
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-pikachu img").style.left = scrolled-2 + "%";
    }

    let allButtons = document.querySelectorAll('a');
    let allIframes = document.querySelectorAll('iframe');

    allButtons.forEach(button => {
        button.addEventListener('click', ()=>{
            allIframes.forEach(iframe => {
                iframe.src += ''
            })
        })
    })
    let allSections = document.querySelectorAll('section');


    let count = 1;
    window.addEventListener("keydown", (event) => {
        if (event.keyCode === 33) {
            event.preventDefault();
            count--     
            if ( count === 12) {
                document.querySelector('#pikachu-wave').classList.toggle('pikanimation');
            } else {
                document.querySelector('#pikachu-wave').classList.toggle('pikanimation');

            }
            document.querySelector(`#slide${count}`).scrollIntoView();
            allIframes.forEach(iframe => {
                iframe.src += ''
            })
        }
        if (event.keyCode === 34) {
            event.preventDefault();
            count++
            if ( count === 12) {
                document.querySelector('#pikachu-wave').classList.toggle('pikanimation');
            }else {
                document.querySelector('#pikachu-wave').classList.toggle('pikanimation');

            }
            document.querySelector(`#slide${count}`).scrollIntoView();
            allIframes.forEach(iframe => {
                iframe.src += ''
            })
        }
        // do something
    })
});