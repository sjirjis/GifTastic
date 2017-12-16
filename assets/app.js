$( document ).ready(function()
	{
		$("#submitButton").on("click", function buttonAdder (input)
		{
			let animalInput = $("#searchBox").val().trim();
			console.log("search: ", animalInput);
			function clear (input)
			{
				animalInput.toLowerCase();
				animalInput.replace(" ", "+");
			}
			clear (animalInput);
			var btn = $("<button>");
			btn.addClass("animalButton");
			btn.attr("data-search", animalInput);
			btn.text(animalInput);
			$('#buttonContainer').append(btn);
		});

		$("#buttonContainer").on("click", ".animalButton", function imageFinder (input)
		{
			let searchInput = $(this).text();

			console.log(input);

			console.log("data-search: ", searchInput);

			let APIkey = "sMwc8ewdP9gAt6Mm886EZEWcJ56AYFTZ";
			let limit = 20;
			let queryURL = "https://api.giphy.com/v1/gifs/search?q="+searchInput+"&api_key="+APIkey+"&limit="+limit;

			console.log('queryURL: ',queryURL);
			
			$.ajax({url: queryURL, method: "GET"}).done(function(response) 
			{	
				for (var i = 0; i < response.data.length; i++)
				{
					console.log('response: ',response);
					let imageURL = response.data[i].images.fixed_width.url;
					let gifDiv = $("<div class='item'>");
					console.log('image URL: ',imageURL);
					let animalImage = $("<img>");
					animalImage.attr("src", imageURL);
		        	animalImage.attr("alt", "animal image");
		        	//$('.gif').pause();
		        	gifDiv.prepend(animalImage);
		        	$('#imageContatiner').prepend(gifDiv);
	        	}
			});
		});
	})

	



