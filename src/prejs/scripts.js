$(function(){  

  let links = $('.links a');
  let nav_height = parseInt($('.links').height());  
  let nav_btn = $('.logo');
  let nav_items = $('.nav-links .links');
  let services_items = $('.services-item-1, .services-item-2, .services-item-3, .services-item-4');  

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

  $('.coaches-item').hover(function(){
    $(this).find('.img').toggleClass('img-wrapper');
    $(this).find('.item-header').toggleClass('item-header-color');
  });   

  services_items.hover(function(){
    $(this).find('h3').css('display', 'none');
  });
  services_items.mouseleave(function(){
    $(this).find('h3').css('display', 'block');
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText : ['<i style="color: rgb(254, 86, 33); font-size: 26px; border: 2px solid rgb(254, 86, 33); border-radius: 50%; padding: 10px 17px 10px 15px; margin-right: 8px;" class="fa fa-chevron-left"></i>',
               '<i style="color: rgb(254, 86, 33); font-size: 26px; border: 2px solid rgb(254, 86, 33); border-radius: 50%; padding: 10px 15px 10px 17px; margin-left: 8px;" class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:true,
            autoplay: false
        },
        600:{
            items:2,
            nav:true,
            autoplay: false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
    
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