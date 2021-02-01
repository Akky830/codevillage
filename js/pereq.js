$(function() {
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