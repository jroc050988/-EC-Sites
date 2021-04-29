var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    observer:true,
    observeParents:true,
    observeSlideChildren:true,
  
    // If we need pagination
    pagination: {
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
  })