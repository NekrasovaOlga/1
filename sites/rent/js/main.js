
btnNav = document.querySelector('.nav__burger')
menuOpen = document.querySelector('.nav__menu')

btnNav.addEventListener('click', openMenu)

function openMenu(){
    menuOpen.classList.toggle('nav__menu-active')
    btnNav.classList.toggle('nav__burger-active')
}

$('.reviews__box').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.slider').slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.hero__slider').slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


