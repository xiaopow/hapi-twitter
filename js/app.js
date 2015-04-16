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
    'http://result2015.net/wp-content/uploads/2015/04/kkkkkkk.jpg'
  ]
  var backStep = 0;

  var backgroundTimer = setInterval(function(){
    var imageUrl = backgroundURL[backStep];
    $('body').css('background-image', 'url(' + imageUrl + ')');
    backStep++;
    if(backStep == backgroundURL.length) { 
      backStep = 0; 
    };
  }, 2000);

});