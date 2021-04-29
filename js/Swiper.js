var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 5,
    centeredSlides: true,
    loop:true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  })
  var mySwiper = new Swiper('.swiper-containerpc', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 200,
    mousewheel: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  })
  var mySwiper = new Swiper('.slider', {
    // Optional parameters
    slidesPerView: 3,
    loop:true,
    slidesPerGroup: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
  var mySwiper = new Swiper('.sliderpc', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 40,
    loop:true,
    slidesPerGroup: 6,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })