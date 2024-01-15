let navBtn = document.querySelector('.burger')
let nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--active')
    navBtn.classList.toggle("burger--active")
    document.body.classList.toggle('stop-scroll')
})



let modalBtn = document.querySelector('.header__btn')
let modal = document.querySelector('.modal-parent')

modalBtn.addEventListener('click', () => {
    modal.classList.add('modal-parent--open')
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-parent')) {
        modal.classList.remove('modal-parent--open');
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.classList.remove('modal-parent--open');

    }
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,




    // Navigation arrows
    navigation: {
        nextEl: '.latest-shots__btn--right',
        prevEl: '.latest-shots__btn--left',
    },


});