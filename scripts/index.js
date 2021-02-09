$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("header nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('header nav').addClass('black');
    }

    else {
          $('header nav').removeClass('black');
    }
})