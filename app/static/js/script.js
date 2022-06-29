var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// about page swipper
  var swiper = new Swiper(".hero__slider--activation", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    speed: 800,
    spaceBetween: 30,
    autoplay: { delay: 3e3, disableOnInteraction: !1 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--activation", {
    slidesPerView: 5,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--column4__activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 4 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__sidebar--column4__activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".product__swiper--column3", {
    slidesPerView: 3,
    clickable: !0,
    loop: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 3 },
      992: { slidesPerView: 2 },
      768: { slidesPerView: 2, spaceBetween: 30 },
      280: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".new__product--sidebar .swiper-button-next",
      prevEl: ".new__product--sidebar .swiper-button-prev",
    },
  }),
  swiper = new Swiper(".testimonial__swiper--activation", {
    slidesPerView: 3,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 3 },
      768: { spaceBetween: 30, slidesPerView: 2 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".testimonial__activation--column1", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".blog__swiper--activation", {
    slidesPerView: 4,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    breakpoints: {
      1200: { slidesPerView: 4 },
      992: { slidesPerView: 3 },
      768: { slidesPerView: 3, spaceBetween: 30 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper = new Swiper(".quickview__swiper--activation", {
    slidesPerView: 1,
    loop: !0,
    clickable: !0,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: { el: ".swiper-pagination", clickable: !0 },
  }),
  swiper = new Swiper(".product__media--nav", {
    loop: !0,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: !0,
    watchSlidesProgress: !0,
    breakpoints: {
      768: { slidesPerView: 5 },
      480: { slidesPerView: 4 },
      320: { slidesPerView: 3 },
      200: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }),
  swiper2 = new Swiper(".product__media--preview", {
    loop: !0,
    spaceBetween: 10,
    thumbs: { swiper: swiper },
  });

  // end of about page swipper  