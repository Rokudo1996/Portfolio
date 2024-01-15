let navBtn = document.querySelector('.burger')
let nav = document.querySelector('.nav__list');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    navBtn.classList.toggle("burger--active")
})
