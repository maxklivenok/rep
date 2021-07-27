/* fixed header */

let header = document.querySelector('#header');
let intro = document.querySelector('#intro');
let introH = intro.clientHeight;


window.addEventListener('scroll',scrollCheck);
window.addEventListener('load',scrollCheck);
    

function scrollCheck(){
    let scrollPos = this.pageYOffset;
    if (scrollPos > introH){
        header.classList.add('fixed')
    } else {
        header.classList.remove('fixed')
    }
}

/* burger menu */

let nav = document.querySelector('.header__nav');
let headerBtn = document.querySelector('.burger');
headerBtn.addEventListener('click', function(){
    nav.classList.toggle('active') 
});

/* smooth scroll */

document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click',function(event){
        event.preventDefault();
        let elementId = this.dataset.scroll;
        let element = document.querySelector(elementId)
        let scrollPos = element.getBoundingClientRect().top;
        window.scrollBy({
            top: scrollPos - 70,
            behavior: 'smooth'
        })
        nav.classList.toggle('active');
    })
})

/* slider https://kenwheeler.github.io/slick/*/

$("#slider").slick({
    infinity: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: true

});








