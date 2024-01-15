const swiper = new Swiper('#slider', {
    // Optional parameters
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.customers__slider-right',
      prevEl: '.customers__slider-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600:{
        slidesPerView: 2,
        spaceBetween: 10,
      }
    }
  });

  let burger = document.querySelector('.burger')
  let navList= document.querySelector('.nav__list')

  burger.addEventListener("click",()=>{
    navList.classList.toggle("nav-active")
    burger.classList.toggle('burger--active')
  })