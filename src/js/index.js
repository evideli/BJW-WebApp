import 'bootstrap';
import '../css/index.css';

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

$("#benefit-img-1").attr("src","https://www.flaticon.com/svg/vstatic/svg/3564/3564796.svg?token=exp=1617897195~hmac=bff1c2fb4fc0ab29174cdde205ca9b34");
$("#benefit-img-2").attr("src","https://www.flaticon.com/svg/vstatic/svg/3722/3722009.svg?token=exp=1617897324~hmac=dd3eadb4ff38f4e466ef10093c8124bd");
$("#benefit-img-3").attr("src","https://www.flaticon.com/svg/vstatic/svg/45/45068.svg?token=exp=1617897410~hmac=c20e4f8b2b0aca82670fe5715a4d7e01");