$(window).scroll(function() {
  $('.nav1').toggleClass('scrolled', $(this).scrollTop() > 20);
  $("#logo1").toggleClass('img-scrolled1', $(this).scrollTop() > 20);
  $(".brand1").toggleClass('brand-size', $(this).scrollTop() > 20);
  $(".brand2").toggleClass('brand2-size', $(this).scrollTop() > 20);
});

$(document).ready(function() {
  $(this).scrollTop(0);
  $(".fa-angle-double-down").click(function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 800) {
      window.scrollBy(0, 500);
    } else {
      window.scrollBy(0, 800);
    }
    console.log("w:" + w + "h:" + h);
  });
});
