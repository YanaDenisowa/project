
if (window.matchMedia("(max-width: 769px)").matches) {

    $(document).ready(function(){

        $('.slider__container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    });
}


//menu
let menu = document.querySelector(".header__menu");
let hamburgerButton = document.querySelector(".hamburger");
let menuItem = document.querySelectorAll('.header__menu__item');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    document.body.classList.toggle('overflow');
    hamburgerButton.classList.toggle("hamburger-active");
});
menuItem.forEach(item => {
    item.addEventListener( 'click', (e) =>{
        if(document.body.classList.contains("overflow")){
            document.body.classList.toggle("overflow");
        }
        hamburgerButton.classList.toggle('hamburger-active');
        menu.classList.toggle('open-menu');

        let link2 = item.getElementsByTagName("a")[0];
        e.preventDefault();
        link2.getAttribute('href');
        document.querySelector(link2.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
});

//show slide right image
let showButton = document.querySelectorAll('.show-content');
console.log(showButton);
let rightColumn = document.querySelectorAll('.slider__content .right-col');
console.log(rightColumn);

let closeButton = document.querySelectorAll('.close-content');
console.log(closeButton);
let leftColumn = document.querySelectorAll('.slider__content .left-col');
console.log(leftColumn);


showButton.forEach((item => {
    item.addEventListener('click',(e) =>{

        // item.style.backgroundColor = "red";

        item.closest('.slider__content').querySelector('.right-col').classList.toggle('display-flex');
        item.closest('.slider__content').querySelector('.left-col').classList.toggle('display-none');

        console.log(item.closest('.slider__content'));
    })
}));
closeButton.forEach((item => {
    item.addEventListener('click', (e)=>{

        if(item.closest('.slider__content').querySelector('.right-col').classList.contains('display-flex')){
            item.closest('.slider__content').querySelector('.right-col').classList.remove('display-flex');
            item.closest('.slider__content').querySelector('.left-col').classList.remove('display-none');
        }

    })
}));




