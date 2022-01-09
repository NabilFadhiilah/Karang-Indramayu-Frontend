var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  centeredSlides: false,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    786: {
      slidesPerView: 4,
      slidesPerGroup: 2,
    },
  },
});

// Countdown
var countDownDate = new Date("Jan 8, 2023 23:22:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Countdown").innerHTML =
    days +
    " Hari " +
    hours +
    " Jam " +
    minutes +
    " Menit " +
    seconds +
    " Detik ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }
}, 1000);
