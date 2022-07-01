

$(document).ready(function(){

   /* NavBar Controler */

   $('.menu-btn').click(function(){
      $('.navbar').animate({left: '75%'})
      $('.navbar-layer').animate({left: '0%'})
   })

   $('.close-mark').click(function(){
      $('.navbar').animate({left: '100%'})
      $('.navbar-layer').animate({left: '-75%'})
   })

   $('.navbar-layer').click(function(){
      $('.navbar').animate({left: '100%'})
      $('.navbar-layer').animate({left: '-75%'})
   })
  

   /* Theme Color Changer */

   document.querySelector('.red-theme').addEventListener('click', function () {
      document.documentElement.style.setProperty('--primary-color', 'rgb(186, 30, 30')
   })
   document.querySelector('.orange-theme').addEventListener('click', function () {
      document.documentElement.style.setProperty('--primary-color', 'rgb(215, 126, 9)')
   })
   document.querySelector('.blue-theme').addEventListener('click', function () {
      document.documentElement.style.setProperty('--primary-color', 'rgb(11, 129, 255)')
   })
   document.querySelector('.green-theme').addEventListener('click', function () {
      document.documentElement.style.setProperty('--primary-color', 'rgb(33, 177, 62)')
   })

})

/* Slider */

let content = document.querySelectorAll('.slide')
let left_btn = document.querySelector('.left-slider-btn')
let right_btn = document.querySelector('.right-slider-btn')
let curent = 0
let max = content.length
let dotcontainer = document.querySelector('.dots')

content.forEach(function(el,i){
    el.style.transform=`translateX(${100 * i}%)`
})

right_btn.addEventListener('click',function(){
    if(curent===max -1){
        curent=0
    }else{
        curent++
    }
    content.forEach(function(el,i){
        el.style.transform=`translateX(${100 * (i-curent)}%)`
    })
})

left_btn.addEventListener('click',function(){
    if(curent===0){
        curent=max -1
    }else{
        curent--
    }
    content.forEach(function(el,i){
        el.style.transform=`translateX(${100 * (i-curent)}%)`
    })
})

/* Slider Dots */

function creatDot() {
   content.forEach(function(_,idx){
      dotcontainer.insertAdjacentHTML('afterbegin',`<button class='dots-circle' data-slide = '${idx}'></button>`)
   })
}
creatDot()

/* Services */

$(".animate").click(function(){
   $("body,html").animate({"scrollTop": 0}, 1000)
   });
 $(".sv1").show()
 $(".sv2").hide()
 $(".sv3").hide()
 $(".head1").click(function(){
   $(".sv1").show(800)
   $(".sv2").hide()
   $(".sv3").hide()
 });
 $(".head2").click(function(){
   $(".sv2").show(800)
   $(".sv1").hide()
   $(".sv3").hide()
 });
 $(".head3").click(function(){
   $(".sv3").show(800)
   $(".sv1").hide()
   $(".sv2").hide()
 });

/* Contact PopUp */

$('.contact-btn').click(function(){
   $('.contact-container').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 500);
   $('.contact').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 500);
   $('.slide,.services-container').css({filter: 'blur(8px)', transition: '1s ease'});
})

$('.contact-container,.close-contact').click(function(){
   $('.contact-container').css({visibility:'hidden', transition: '.5s'}).animate({opacity: 0}, 300);
   $('.contact').css({visibility:'hidden', transition: '.5s'}).animate({opacity: 0}, 300);
   $('.slide,.services-container').css({filter: 'blur(0)', transition: '1s ease'});
})