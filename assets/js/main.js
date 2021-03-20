(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 300) {
        $(".header-area").addClass("sticky");
      } else {
        $(".header-area").removeClass("sticky");
      }
    });
    $(".navbar-toggler").click(function () {
      $(".mobile-menu").toggleClass("active");
      $("body").toggleClass("scroll");
    });
    $(".close-btn").click(function () {
      $(".mobile-menu").toggleClass("active");
      $("body").toggleClass("scroll");
    });
  });
})(jQuery);
