const menu = document.getElementById('burger');
const nav = document.getElementById('menu');

menu.onclick = function(){
    menu.classList.toggle('nav-span__active');
if(menu.classList.contains('nav-span__active')){
    nav.style.opacity = '1';
}else{
    nav.style.opacity = '0';
}
};
