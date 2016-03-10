 $('button').on('click', function() {
        var movie = $(this).data('movie');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=dc6zaTOxFJmzC&limit=10"

        $.ajax({
                url: queryURL,
                method: 'GET'
        }).done(function(data){
        	for (var i = 0; i < data.data.length; i++) {
    			var gif = $("<img>").attr("src", data.data[i].images.downsized_medium.url);
        		$(".gifs").append(gif);	
          		console.log(data.data[i].images);
          	}
        })
    })

// Make each gif still(pause) on click. Use if / else statement?

	