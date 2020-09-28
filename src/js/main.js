// Set the Access Token
var accessToken = "2a40e1da51330b10dbf09f78d847ffeef4082a982cb1caf50af675670bd78fa7"

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {     
          $('#dribbbleShots').prepend(
            '<li class="dribbble-shot"><a target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/></a></li>'
            )
            return i<7;
        })
        
      }
      else {
        $('#dribbbleShots').append('<p>Sorry, No shots yet</p>');
      }
    }
});