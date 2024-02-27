let burger = document.querySelector('.burger')
let navList= document.querySelector('.header__list')

burger.addEventListener("click",()=>{
  navList.classList.toggle('nav-active')
})