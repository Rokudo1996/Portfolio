const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-left',
    prevEl: '.swiper-button-right',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }


});


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Читать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Читать меньше";
    moreText.style.display = "inline";
  }
}

let map;

ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [37.159062, -8.613330],
    zoom: 12
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185, 2.354224] // координаты точки
    }
  });
  var myPlacemark1 = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageClipRect: [[0, 0], [28, 40]],
    iconImageHref: 'Subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-28, -40]
  });
  myMap.geoObjects.add(myPlacemark1);
}

const menuBtn = document.querySelector('.burger__btn')
const menuList = document.querySelector('.menu-mobile')

menuBtn.addEventListener('click', () =>
  menuList.classList.toggle("open")
)
