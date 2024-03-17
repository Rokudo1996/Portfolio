import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 4,
        }
    },
    // If we need pagination
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



import mobileNav from './modules/mobile-nav.js';
mobileNav();


const close = document.querySelector('.ticket__close')
const ticket = document.querySelector('.ticket')

close.onclick = function () {
    ticket.remove()
}



//  TIMER
function updateTimer() {
    var daysElement = document.getElementById('days');
    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');

    var days = parseInt(daysElement.textContent);
    var hours = parseInt(hoursElement.textContent);
    var minutes = parseInt(minutesElement.textContent);
    var seconds = parseInt(secondsElement.textContent);

 
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
        } else {
          if (days > 0) {
            days--;
            hours = 23;
          } else {
            alert('Timer has reached zero!');
            clearInterval(timerInterval);
            return;
          }
        }
      }
    }

    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }

 
  function formatTime(time) {
    return (time < 10) ? '0' + time : time;
  }

  var timerInterval = setInterval(updateTimer, 1000);