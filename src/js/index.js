import 'bootstrap';

import '../scss/index.scss';

jQuery(function () {
  console.log("ready!");
  $(".carousel-inner").css({
    "background-color": "rgba(black, 0.9)",
    "zIndex": 1,
  });
})

$('#sign-in').on('click', () => {
  alert('Operation not allowed!');
});

$('#bootstrap-more-button').on('click', () => {
  window.open("https://getbootstrap.com/", "_blank");
});

$('#jquery-more-button').on('click', () => {
  window.open("https://jquery.com/", "_blank");
});

$('#webpack-more-button').on('click', () => {
  window.open("https://webpack.js.org/", "_blank");
});
