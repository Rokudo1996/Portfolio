let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
  menu.classList.toggle('hide')
})
function startTimer(days, hours, minutes) {
  const endTime = new Date();
  endTime.setDate(endTime.getDate() + days);
  endTime.setHours(endTime.getHours() + hours);
  endTime.setMinutes(endTime.getMinutes() + minutes);

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
    const currentTime = new Date().getTime();
    const distance = endTime - currentTime;

    const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('daysValue').textContent = remainingDays;
    document.getElementById('hoursValue').textContent = remainingHours;
    document.getElementById('minutesValue').textContent = remainingMinutes;

    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = 'Время истекло';
    }
  }

  updateTimer();
}

// Установите дни, часы и минуты здесь
const days = 20;
const hours = 20;
const minutes = 59;

startTimer(days, hours, minutes);

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },


});
const navElements = document.querySelectorAll('a[href^="#"]');

navElements.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');
  const video = document.querySelector('.trailer__video');
  
  playButton.addEventListener('click', function(event) {
      event.preventDefault();
      video.style.display = 'block';
      video.play();
      playButton.style.display = 'none';
  });

  video.addEventListener('click', function() {
      if (video.paused) {
          video.play();
      } else {
          video.pause();
      }
  });
});



(function () {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);

  skipClickDelay = function (e) {
    e.preventDefault();
    e.target.click();
  }

  setAriaAttr = function (el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function (el1, el2, expanded) {
    switch (expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function (e) {
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();




const buyButtons = document.querySelectorAll('.buy-button');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('modal--active');
    modal.classList.remove('modal--close');
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.add('modal--close');
  modal.classList.remove('modal--active')
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.visibility = 'hidden';
  }
});

const form = document.getElementById('payment-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Добавьте здесь логику для проверки и обработки данных перед покупкой
  const cardNumber = document.getElementById('card-number').value;
  const expiryDate = document.getElementById('expiry-date').value;
  const ccv = document.getElementById('ccv').value;
  const cardholderName = document.getElementById('cardholder-name').value;
  const agreement = document.getElementById('agreement').checked;

  if (cardNumber && expiryDate && ccv && cardholderName && agreement) {
    // Все поля заполнены, можно осуществить покупку
    alert('Покупка успешно совершена!');
    modal.style.display = 'none';
  } else {
    alert('Пожалуйста, заполните все поля и согласитесь с условиями.');
  }
});


const sections = document.querySelectorAll('.section')

const handleScroll = () => {
  const { scrollY: y, innerHeight:x } = window;
  console.log(y)
  sections.forEach((section) => {
    if (y > section.offsetTop-x/1.5) section.classList.remove('hide')
  })
}

window.addEventListener('scroll', handleScroll)