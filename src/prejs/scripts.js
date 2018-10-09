$(function(){
  
  let links = $('.links a');
  let nav_height = parseInt($('.links').height());  
  let nav_btn = $('.logo');
  let nav_items = $('.nav-links .links');  

  links.on('click', function(e){

    e.preventDefault();

    links.removeClass('active-link');
    let active_link = $(this).addClass('active-link');
    let selector = active_link.attr('href');
    let target = $(selector);

    if (target.length > 0) {

      $('html, body').animate({
        scrollTop: target.offset().top - nav_height + 130
      }, 800);

    }

  });  

  nav_btn.on('click', function(){

    links.removeClass('active-link');

    nav_items.slideToggle(300, function(){

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }

    });

  });

  $(document).on('scroll', function(){
    links.removeClass('active-link');
  });
    
});

function initMap(){

  let element = document.querySelector('#map');
  let options = {
    zoom: 10,
    center: {
      lat: 50.448455, 
      lng: 30.522480
    }
  };

  let myMap = new google.maps.Map(element, options);

  let marker = new google.maps.Marker({
    position: {
      lat: 50.448455, 
      lng: 30.522480
    },
    map: myMap
  });

}