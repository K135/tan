var swiper = new Swiper('.swiper-container', {
	effect: 'zoom',
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 1,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
breakpoints: {
  0:{
	slidesPerView: 1,
	spaceBetween: 10,
  },
  640: {
	slidesPerView: 2,
	spaceBetween: 20,
  },
  768: {
	slidesPerView: 3,
	spaceBetween: 40,
  },
  1024: {
	slidesPerView: 3,
	spaceBetween: 0,
  },
},

});