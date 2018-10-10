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

  // MODAL WINDOW

  let second_click = false;
  let first_click_choise = {};
  let modal_btn = $('.free-lesson .button #btn, .caption-upper-layer .button #btn');  
  let choose_prog_btn = $('.choose-prog-btn');  
  
  modal_btn.magnificPopup().on('click', function(){
    
    if(second_click === false) {
      choose_prog_btn.on('click', function(e){

        e.preventDefault();    
    
        let user_name = $('.form input[name="name"]').val();
        let user_age = $('.form input[name="age"]').val();
        let user_weight = $('.form input[name="weight"]').val();
        let user_gender = $('.form input[name="gender"]:checked').val();
        let user_activities = getActivities();        
    
        function getActivities (){
    
          let activities = [];
    
          $('.form input:checkbox:checked').each(function(){
            // activities.push($(this).val());
            activities.push($(this).data('activity'));
          });
    
          return activities;
        } 

        $('.programms').css('display', 'block');
        $('.programms-form').html(defineProgramm(user_activities));

      });     
        
        function defineProgramm (activities) {

          let programms;          
          
          switch (activities.length){
            case 5:
            programms = `<input type="checkbox"> ${activities[0]}<br>
                         <input type="checkbox"> ${activities[1]}<br>
                         <input type="checkbox"> ${activities[2]}<br>
                         <input type="checkbox"> ${activities[3]}<br>
                         <input type="checkbox"> ${activities[4]}<br>`;
            break;
            case 4:
            programms = `<input type="checkbox"> ${activities[0]}<br>
                         <input type="checkbox"> ${activities[1]}<br>
                         <input type="checkbox"> ${activities[2]}<br>
                         <input type="checkbox"> ${activities[3]}<br>`;
            break;
            case 3:
            programms = `<input type="checkbox"> ${activities[0]}<br>
                         <input type="checkbox"> ${activities[1]}<br>
                         <input type="checkbox"> ${activities[2]}<br>`;
            break; 
            case 2:
            programms = `<input type="checkbox"> ${activities[0]}<br>
                         <input type="checkbox"> ${activities[1]}<br>`;
            break;
            case 1:
            programms = `<input type="checkbox"> ${activities[0]}<br>`;
            break;               
          }
          
          return programms;

      }  
   
    } else {
      
    }   

    second_click = true    
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