const hamburgar = document.querySelector('.header .nav-bar .nav-list .hambueger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container ');

haburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll',()=>{
   var_scroll_position = window.scrollv;
})