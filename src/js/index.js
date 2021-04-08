import 'bootstrap';
import '../css/index.css';

jQuery(function () {

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

$(".form-inline").submit((event) => {
  event.preventDefault();
});