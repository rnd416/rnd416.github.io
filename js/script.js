$(".card-wrapper").flip({
  trigger: "manual"
});
$(document).on('click', '.btn.flip', function(){
  $(".card-wrapper").flip(true);
  $('.btn.flip').removeClass('btn flip').addClass('btn unflip');
});
$(document).on('scrollLeft', function() {
  $(".card-wrapper").flip(true);
})

$(document).on('click', '.btn.unflip', function(){
  $(".card-wrapper").flip(false);
  $('.btn.unflip').removeClass('btn unflip').addClass('btn flip');
});

$(document).on('click', '.responsive-nav-showButton-show',function() {
  $('.responsive-nav-hidden').removeClass('responsive-nav-hidden').addClass('responsive-nav-show');
  $('.responsive-nav-showButton-show').removeClass('responsive-nav-showButton-show').addClass('responsive-nav-showButton-hidden');
});

$(document).on('click', '.responsive-nav-closeButton',function() {
  $('.responsive-nav-show').removeClass('responsive-nav-show').addClass('responsive-nav-hidden');
  $('.responsive-nav-showButton-hidden').removeClass('responsive-nav-showButton-hidden').addClass('responsive-nav-showButton-show');
});

$(document).on('click', '.responsive-nav-list', function() {
  $('.responsive-nav-show').removeClass('responsive-nav-show').addClass('responsive-nav-hidden');
  $('.responsive-nav-showButton-hidden').removeClass('responsive-nav-showButton-hidden').addClass('responsive-nav-showButton-show');
});

var agent = navigator.userAgent.toLowerCase();
var filter = "win16|win32|win64|mac|macintel";
if( filter.indexOf(navigator.platform.toLowerCase())>0 ){
    if (agent.indexOf("chrome") != -1) {
      $('.btn').css('position', 'fixed');
    }
}

$(document).ready(function() {
  itemLength = $('.gallery-item').length;
  counter = 0;
  
  loadGalleryItem();
});

function loadGalleryItem() {
  setTimeout(loadGalleryItem,200);
  if(counter <= itemLength) {
    $($('.gallery-item').eq(counter)).css({
      'transform': 'scale(1)'
    });
    counter += 1;
  }
}