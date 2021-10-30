const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function (){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
searchInputEl.addEventListener('blur', function (){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
// 반복처리하는 함수 forEach 
// fadeEl을 1초 동안 { 투명도가 1이 되고 지연값 000 }
// delay 0.7초에 한 번씩 실행될 수 있도록 한다. 기초값에 .7을 곱한다.
// index는 0부터 시작하는 제로베이스다.
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1)* .7
  });
});


new Swiper('.notice-line .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('.promotion .swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000
  },
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.promotion .swiper-next',
    prevEl: '.promotion .swiper-prev'
  }
});


const promotionToggleBtn = document.querySelector('.notice .toggle-promotion');
const promotionEl = document.querySelector('.promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});