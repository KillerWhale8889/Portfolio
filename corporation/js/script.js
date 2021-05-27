const icons = document.querySelectorAll('.icon');
var nav = document.querySelector('nav');
var link = document.querySelector('nav .nav-links');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    nav.classList.toggle('nav-open');
    link.classList.toggle('fade-in');
  });
});

// var menuBtn = document.querySelector('.icon');
// var nav = document.querySelector('nav');
// var link = document.querySelector('nav .nav-links');
// menuBtn.addEventListener('click', () => {
//     nav.classList.toggle('nav-open');
//     link.classList.toggle('fade-in');
// })


var swiper = new Swiper('.swiper-container', {
    effect : 'fade',
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    dynamicBullets: false,
    clickable : true,
    },
    slidesPerView: 1,
    spaceBetween:0,  
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
    delay : 3490,   // 시간 설정
    disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },  
});

var swiper2 = new Swiper('.partner_items', {
  slidesPerView: 7,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 4,
    },

    1600: {
      slidesPerView: 5,
    },

    1920: {
      slidesPerView: 7,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 1500,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
});




function navigo (){
    const header = document.querySelector('header');
    const headerheight = header.clientHeight;
  document.addEventListener('scroll', onScroll, { passive: true });
   function onScroll () {
       const scrollposition = pageYOffset;
       const nav = document.querySelector('nav');
       const logo = document.querySelector('.logo');
     if (headerheight<=scrollposition && logo != null){
       nav.classList.add('fix')
     }
     else if (headerheight<=scrollposition && logo == null){
       nav.classList.add('sub_fix') 
     }
     else {
       nav.classList.remove('fix');
       nav.classList.remove('sub_fix')
       
     }
   } 
    
  }
  navigo();  
  