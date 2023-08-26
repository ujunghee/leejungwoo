// 스와이퍼 이벤트
var swiper;

function initializeSwiper() {
  var screenWidth = window.innerWidth;

  var slidesPerView = 3; // Default number of slides

  if (screenWidth <= 600) {
    slidesPerView = 1; // Change to 1 slide per view for screens <= 600px
  }

  swiper = new Swiper(".mySwiper", {
    slidesPerView: slidesPerView,
    spaceBetween: 30,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
}
initializeSwiper();


 window.addEventListener("resize", function () {
   swiper.destroy();
   initializeSwiper(); 
 });

// 모바일 토글 메뉴
const menuBtn = document.querySelector('.menu-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu nav');
const closeBtn = hamburgerMenu.querySelector('.close');

menuBtn.addEventListener('click', () => {
  hamburgerMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  hamburgerMenu.classList.remove('open');
});

// 게시판 온오프 이벤트
document.addEventListener("DOMContentLoaded", function () {
  const questionItems = document.querySelectorAll(".question");

  questionItems.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("open"); // open 클래스 토글
    });
  });
});

// 스크롤 스무스 이벤트
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// 스크롤 오퍼시티 이벤트
window.onload = function() {
  const scrollElements = document.querySelectorAll(".scroll");


  window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    scrollElements.forEach(function(element) {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < windowHeight && elementPosition > 0) {
        const opacityValue = (windowHeight - elementPosition) / (windowHeight / 2);

        const clampedOpacity = Math.min(opacityValue, 1);

        gsap.to(element, { opacity: clampedOpacity, duration: 1 });
      }
    });
  });
};