$(document).ready(function(){

  //------------------ changing background image ---------------------

  var backgroundURL = [
    'http://cdn.c.photoshelter.com/img-get/I0000gBldXyJY.Gg/s/750/750/Water-Festival-in-Bangkok-Thailand-18.jpg',
    'http://cdn.c.photoshelter.com/img-get/I0000Td1dnHXqYao/s/750/750/Water-Festival-in-Bangkok-Thailand-3.jpg',
    'http://cinemagraphs.com/images/demo/train-repeat-429.gif',
    'http://cinemagraphs.com/images/demo/chelsea-hotel-4429.gif',
    'http://cinemagraphs.com/images/demo/cab-window-429.gif'
  ]
  var backStep = 0;

  var backgroundTimer = setInterval(function(){
    backStep++;
    if(backStep == backgroundURL.length) { 
      backStep = 0; 
    };
    var imageUrl = backgroundURL[backStep];
    setTimeout(function(){
      $('#homeback').fadeOut(1000, function(){
        $('#homeback').css('background-image', 'url(' + imageUrl + ')');
        $('#homeback').fadeIn(1000);
      });
    });
  }, 10000);

});