$(document).ready(function() {
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 600);
  //       return false;
  //     }
  //   }
  // });

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

  // Scroll - Anclas - Menu con clase active
  $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 600, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

  // Waypoint - Menu, cambiar el color de bg
  $('.index-bg').waypoint(function(direction) {
    if(direction == 'down'){
      $('.center-contents').addClass('center-contents-bg');
    }
    else{
      $('.center-contents').removeClass('center-contents-bg');
    }
  }, {
    offset: '90%'
  });

  $('.section-bg').waypoint(function(direction) {
    if(direction == 'down'){
      $('.center-contents').addClass('center-contents-bg');
    }
    else{
      $('.center-contents').removeClass('center-contents-bg');
    }
  }, {
    offset: '70%'
  });

});

// Scroll - Menu con clase active
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.page-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.page-nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

// Funcion para mostar/ocultar menu responsive
function toggleNavigation(){
  $('.page-header').toggleClass('menu-expanded');
  $('.page-nav').toggleClass('collapse');
  $('.center-contents').toggleClass('center-contents-toggle', 'switch');
  $('.linea1').toggleClass('overL1');
  $('.linea2').toggleClass('overL2');
  $('.linea3').toggleClass('overL3');
}

// DOM - Click en menu responsive
$(window).on('load',function(){
  $('.toggle-nav').click(toggleNavigation);
});