$(function() {
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
　　 var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  $('#hum-menu').click(function() {
    $('#hum-nav').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#hum-nav').fadeOut();
  });
  
  $('.nav-item').click(function() {
    $('#hum-nav').fadeOut();
  });

  $('#top-button').hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 100) {
      $('#top-button').fadeIn();
    } else {
      $('#top-button').fadeOut();
    }
  })

  $('#top-button').click(function(){
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
});    