$(document).ready(function(){

  var currentUser;

  authenticate(function(response) {
    if(response.authenticated) {
      currentUser = response.username;
      $('#user-icon').text(currentUser);
      $('.username').text(currentUser);
      $('.screenName').text('@'+currentUser);
      getUserTweets(currentUser, function(response) {
        $('.user-stats-tweets').text(response.length);
      });
    } else {
      window.location.replace("index.html");
    }
  });

  $(document).on('click', '#log-out', function() {
    logoutUser(function(){
      authenticate(function(response) {
        if(!response.authenticated) {
          window.location.replace("index.html");
        }
      });
    });
  });

  $(document).on('click', '#post-tweet-btn', function() {
    postTweet($('.post-input').val(), function(result) {
      if(result.success) {
        $('.post-input').val('');
        getTweetsAndPost();
      }
    });
  });

  function getTweetsAndPost() {
    getAllTweets(function(response){
      $('.feed').text('');
      console.log(response);
      $.each(response, function(index){
        if(response[index]['username'] === currentUser) {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            <a class="delete-tweet" id="'+response[index]['_id']+'" href="#">Delete</a> \
            </div>'
          );
        } else {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            </div>'
          );
        }
      });
    });
  }

  $(document).on('click', '.navbar-brand', function() {
    getTweetsAndPost();
  });

  $(document).on('click', '.delete-tweet', function() {
    deleteOneTweet($(this).attr('id'), function(){
      getTweetsAndPost();
    });
  });

  function getUserTweetsAndPost(username) {
    getUserTweets(username, function(response) {
      $('.feed').text('');
      console.log(response);
      $.each(response, function(index){
        if(response[index]['username'] === currentUser) {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            <a class="delete-tweet" id="'+response[index]['_id']+'" href="#">Delete</a> \
            </div>'
          );
        } else {
          $('.feed').prepend(
            '<div class="tweet col-xs-12"> \
            <a class="tweet-username" href="#">'+response[index]['username']+'</a> \
            <a class="tweet-screenName" href="#">@'+response[index]['username']+'</a> \
            <p>'+response[index]['message']+'</p> \
            </div>'
          );
        }
      });
    });
  }

  $(document).on('click', '.tweet-username', function() {
    getUserTweetsAndPost($(this).text());
  });

  $(document).on('click', '.username', function() {
    getUserTweetsAndPost($(this).text());
  });

  getTweetsAndPost();

});