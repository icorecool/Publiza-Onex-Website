$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });

  var video = $("#player").attr("src");

  $('.show-video').on('click',function() {

    $('body').css('overflow','hidden');
    $('.video-modal').addClass('video-modal-show');
    $('#player').attr('src',video);


  });

  $('.video-modal').on('click',function() {

    $('body').css('overflow','auto');
    $('.video-modal').removeClass('video-modal-show');
    $('#player').attr('src','');

  });


});


// DECLARACIÓN DE LA FUNCION
function toggleNavigation(){
  $('.page-header').toggleClass('menu-expanded');
  $('.page-nav').toggleClass('collapse');
  $('.center-contents').toggleClass('center-contents-toggle')
}

// EVENTOS DEL DOM
$(window).on('load',function(){
  $('.toggle-nav').click(toggleNavigation);
});