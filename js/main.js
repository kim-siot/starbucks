

//배지 스크롤
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

// TO-TOP
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});




// 비주얼 섹션 
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


// NOTICE, PROMOTION SWIPER, AWARDS
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

new Swiper('.awards .swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: '.awards .swiper-next',
    prevEl: '.awards .swiper-prev'
  }
});


// PROMOTION TOGGLE
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


// YOUTUBE FLOATING
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) { 
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
      y: 20, //y축으로 00px 이동
      repeat: -1, // 무한 반복
      yoyo: true, // 애니메이션을 되감기하기
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);




const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});