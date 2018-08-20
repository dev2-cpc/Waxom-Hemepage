$(function (){
    $('.s8-page-gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            arrows: false,
            }
        }]
    });
    
    $('.s9-page').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
        responsive: [
            {
            breakpoint: 992,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
            }]
    });
    
    $('.modal').on('hide.bs.modal', function (e) {
        $("iframe").each(function() {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          });
    });

    $('.dropdown').on('shown.bs.dropdown', function () {
        $(".dropdown-menu").slideDown();
    });
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(".dropdown-menu").slideUp();
    });
})
