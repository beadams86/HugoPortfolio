// Set the Access Token
var accessToken = "5eb0a8b0f354099ba8611cfffb46c3a9de3c0b2f5bbe4ff7de22d51d990bd18c"

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {     
          $('#dribbbleShots').prepend(
            '<div class="four columns" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/></li>'
            )
            return i<8;
        })
        
      }
      else {
        $('#dribbbleShots').append('<p>Sorry, No shots yet</p>');
      }
    }
});