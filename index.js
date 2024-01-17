/* cover image */

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // sign in form  //

const weaper = document.querySelector('.form-control');
const btn = document.querySelector('#but');
const bd = document.querySelector('.bd');
weaper.addEventListener('click',()=>{
     weaper.classList.remove('active');
});

btn.addEventListener('click',()=>{
    weaper.classList.add('active-popup');
});

bd.addEventListener('click',()=>{
    weaper.classList.remove('active-popup');
});



 // sign in form  //

 const weaper1 = document.querySelector('.form-control');
 const btn1= document.querySelector('#but1');
 const bd1 = document.querySelector('.bd');
 weaper1.addEventListener('click',()=>{
      weaper1.classList.remove('active');
 });
 
 btn1.addEventListener('click',()=>{
     weaper1.classList.add('active-popup');
 });
 
 bd1.addEventListener('click',()=>{
     weaper1.classList.remove('active-popup');
 });