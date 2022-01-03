var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    786: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
  },
  // scrollbars: {
  //   el: ".swiper-scrollbars",
  //   clickable: true,
  // },
});
