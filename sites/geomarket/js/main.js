$(function(){
  let burger = document.querySelector('.navigation_burger')
  let nav = document.querySelector('.navigation_nav')


  burger.addEventListener('click', (e) =>{
    burger.classList.toggle('active')

    if(burger.classList.contains('active')){
      nav.style.right = '0'
    } else {
      nav.style.right = '-500px'
    }
  })
    $('.map__dots').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true
      });



      $('.main__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<div class="main-arrow main-arrow-right"><img src='./img/arrright.png'></div>`,
        nextArrow: `<div class="main-arrow main-arrow-left"><img src='./img/arrleft.png'></div>`,
        asNavFor: '.main__dots'

      });
      $('.main__dots').slick({
        slidesToShow: 3,
        focusOnSelect: true,
        asNavFor: '.main__slider'
      })
      $('.review__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1282,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              variableWidth: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
});