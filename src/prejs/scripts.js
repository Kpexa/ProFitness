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
  let programm_confirm = $('.confirm');
  let first_choise = $('.choise');  

  modal_btn.magnificPopup().on('click', function(){
    
    if(second_click === false) {
      choose_prog_btn.on('click', function(e){

        e.preventDefault();    
    
        let user_name = $('.form input[name="name"]').val();
        let user_age = $('.form input[name="age"]').val();
        let user_weight = $('.form input[name="weight"]').val();
        let user_gender = $('.form input[name="gender"]:checked').val();
        let user_activities = getActivities();
        let value_activities = getValueActivities();
        let arr_activities = parseActivitiesValues(value_activities);       

        function getActivities (){
    
          let activities = [];
          
          $('.form input:checkbox:checked').each(function(){            
            activities.push($(this).data('activity'));
          });
    
          return activities;
        }
        
        function getValueActivities(){
          
          let value_activities = [];
    
          $('.form input:checkbox:checked').each(function(){
            value_activities.push($(this).val());            
          });

          return value_activities
        }

        function parseActivitiesValues(values){

          let arr = [];

          for(let i = 0; i < values.length; i++){

            switch (values[i]){
              case 'box':
              arr.push($('.form input[name="activity-1"]').data('activity'));
              break;
              case 'crossfit':
              arr.push($('.form input[name="activity-2"]').data('activity'));
              break;
              case 'powerlifting':
              arr.push($('.form input[name="activity-3"]').data('activity'));
              break;
              case 'pilates':
              arr.push($('.form input[name="activity-4"]').data('activity'));
              break;
              case 'aerobic':
              arr.push($('.form input[name="activity-5"]').data('activity'));
              break;
            }

          }

          return arr;
        }

        let programm_caption = `Уважаемый ${user_name}, вот список программ составленный
                                исходя из Вашего выбора активностей`

        $('.programms').css('display', 'block');
        $('.programms h3').html(programm_caption);
        $('.programms-form').html(defineProgramm(user_activities));

      });
      
      programm_confirm.on('click', function(){
        $('.choise').css('display', 'block');
        let choise_caption = `Уважаемый ${user_name}, вот список программ которые Вы выбрали ранее:`;
        first_choise.html('choise_caption')
        for(let i = 0; i < arr_activities.length; i++){
          first_choise.html('<input type="checkbox" checked>' + arr_activities[i]);
        }        
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