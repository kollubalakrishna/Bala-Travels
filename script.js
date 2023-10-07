const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".nav-container");

toggle.addEventListener('click', ()=>{
  navigation.classList.toggle("nav-container--visible");
});

let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click',() =>{
     document.querySelector('.controls .active').classList.remove('active');
     btn.classList.add('active');
     let src = btn.getAttribute('data-src');
     document.querySelector('#video-slider').src = src;
    });
 });
 
 var Swiper = new Swiper(".review-slider",{
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
     },
    },
 });
 