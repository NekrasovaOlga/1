const nav = document.getElementById('menu');
let items = document.querySelectorAll('.nav-menu__link');
let menu = document.querySelector('#burger');


$(document).ready(function(){
  $(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top + -50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu a').removeClass("nav-menu__active");
          currLink.addClass("nav-menu__active");
      }
      else{
          currLink.removeClass("nav-menu__active");
      }
      });
   });
});

$('#menu').on('click', 'a', function(event){
event.preventDefault();

var id = $(this).attr('href'),
top = $(id).offset().top;

$('body,html').animate({scrollTop: top}, 1000);
});



menu.onclick = function(){
    menu.classList.toggle('nav-span__active');
if(menu.classList.contains('nav-span__active')){
    nav.style.animation = 'menu 1.5s alternate';
    nav.style.display = "flex";
}else{
  nav.style.animation = 'menu2 1.5s';
  setTimeout(function(){
    nav.style.display = 'none';
  },1000)
    
}
};

var typed = new Typed('#typed', {
    strings: [
        'текст 1', 
        'текст 2', 
        'текст 3'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 10,
        loopCount: Infinity,
        loop: true
  });

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );




for( let i = 0; i < items.length; i++ ){
  items[i].addEventListener ('click', function(){
    if(!this.classList.contains('nav-menu__active')){
        this.classList.add('nav-menu__active');
          for( let j = 0; j < items.length; j++)
          if(i != j){
            items[j].classList.remove('nav-menu__active');
          }
    }else{
      this.classList.remove('nav-menu__active');
    }
    
    })
};

$('#circle').circleProgress({
  value: 0.90,
  size: 150,
  startAngle: 300,
  fill: {
    gradient: ["red", "orange"]
  }
});

$('#circle1').circleProgress({
  value: 0.80,
  size: 150,
  startAngle: 300,
  fill: {
    gradient: ["red", "orange"]
  }
});
$('#circle2').circleProgress({
  value: 0.60,
  size: 150,
  startAngle: 300,
  fill: {
    gradient: ["red", "orange"]
  }
});
$('#circle3').circleProgress({
  value: 0.70,
  size: 150,
  startAngle: 300,
  fill: {
    gradient: ["red", "orange"]
  }
});
$('#circle4').circleProgress({
  value: 0.80,
  size: 150,
  startAngle: 300,
  fill: {
    gradient: ["red", "orange"]
  }
});


