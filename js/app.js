$(document).ready(function(){

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  function createUser(username, email, password) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'http://localhost:3000/users';
    newRequest['data'] = {
      'user': {
        'username': username,
        'email': email,
        'password': password
      }
    };
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  }

  $(document).on('click', '#sign-up-btn', function(e){
    e.preventDefault();
    var usernameInput = $('.sign-up .username').val();
    var emailInput = $('.sign-up .email').val();
    var passwordInput = $('.sign-up .password').val();
    createUser(usernameInput, emailInput, passwordInput);
  });

  function signInUser(username, password) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'http://localhost:3000/sessions';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['data'] = {
      'user': {
        'username': username,
        'password': password
      }
    };
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  }

  $(document).on('click', '#log-in-btn', function(e){
    e.preventDefault();
    var usernameInput = $('.log-in .username').val();
    var passwordInput = $('.log-in .password').val();
    signInUser(usernameInput, passwordInput);
  });

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