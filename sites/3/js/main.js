var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.slider_button'
    },
    breakpoints: {
        500: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        0: {
            slidesPerView: 1,
            spaceBetween: 20
          }
    }
})



function menu(){


    var btn = document.getElementById("navigation");
    var burger = document.getElementById("burger");
    burger.onclick = function(){
        burger.classList.toggle('active');
        if( burger.classList.contains('active')){
            btn.style.opacity = "1";  
        }
        else
        {
            btn.style.opacity = "0";  
        }
        
    }
}