// $(document).ready(function(){

  function Request() {
    this.type = '';
    this.url = '';
    this.data = {};
    this.dataType = 'json';
    this.success = function(response){
    }
  };

  //------------------ Create User --------------------

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
  };

  $(document).on('click', '#sign-up-btn', function(e){
    e.preventDefault();
    var usernameInput = $('.sign-up .username').val();
    var emailInput = $('.sign-up .email').val();
    var passwordInput = $('.sign-up .password').val();
    createUser(usernameInput, emailInput, passwordInput);
  });

  //------------------ Signing In -----------------------

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
  };

  $(document).on('click', '#log-in-btn', function(e){
    e.preventDefault();
    var usernameInput = $('.log-in .username').val();
    var passwordInput = $('.log-in .password').val();
    signInUser(usernameInput, passwordInput);
  });

  //------------------ Authenticate ---------------------

  function authenticate() {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/authenticated';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };

  //---------------------- Tweets -----------------------

  //------------------- Post a Tweet --------------------
  function postTweet(msg) {
    var newRequest = new Request();
    newRequest['type'] = 'POST';
    newRequest['url'] = 'http://localhost:3000/tweets';
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['data'] = {
      'tweet': {
        'message': msg
      }
    };
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };

  //------------------- Get all Tweets ------------------

  function getAllTweets() {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/tweets';
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };

  //----------------- Get tweet by ID --------------------

  function getOneTweet(id) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/tweets/' + id;
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };

  //------------- Get All Tweets by Username -------------

  function getUserTweets(username) {
    var newRequest = new Request();
    newRequest['type'] = 'GET';
    newRequest['url'] = 'http://localhost:3000/users/' + username + '/tweets';
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };

  //---------------- Delete a tweet by ID ----------------

  function deleteOneTweet(id) {
    var newRequest = new Request();
    newRequest['type'] = 'DELETE';
    newRequest['url'] = 'http://localhost:3000/tweets/' + id;
    newRequest['xhrFields'] = { 'withCredentials': true };
    newRequest['success'] = function(response){
      console.log(response);
    };

    $.ajax(newRequest);
  };  

// });