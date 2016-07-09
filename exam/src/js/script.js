$(function () {
	
	 $('.holidays_grid').masonry({
		itemSelector: '.holidays-item'
	 });



$('.holidays_button').on('click', pic);

// 	function pictures (e) {
// 		var input = $('.holidays_input').val();
// 		$.ajax({
// 			dataType: 'json',
// 	  		url: "http://api.pixplorer.co.uk/image?word=" + $('.holidays_input').val() + "&amount=7&size=sm"
// 		})
// 	  	.done(function( data ) {
// 	  		var images = data.images;
// 	  		var template = tmpl($('#image_tmpl').html(), {data: images});

// 	  		$('.holidays_grid').html(template);
// 	      		console.log( "Sample of data:", images);
// 	  	});
// 	  	return false;
// }

function pic () {
var input = $('.holidays_input').val()

$.ajax({
	url : "http://api.flickr.com/services/feeds/photos_public.gne",
	dataType: 'jsonp',
	data: { "tags": input, "format": "json" }
});

	jsonFlickrFeed = function(d){
		var json = d;
		var data = [];
		var title = [];

		for (var i = 0; i < 7; i++) {
			data.push(json.items[i].media.m.replace('_m', '_z'));
			title.push(json.title.replace('Recent Uploads t', 'T'));
			};

		var template = tmpl($('#image_tmpl').html(), {data: data, title});

		$('.holidays_grid').html(template);
	}

	return false
}

	$('#slider-1').flexslider({
		animation: 'fade',
		controlsContainer: '#slider-1',
		controlNav: false,
		namespace: 'work_slider-',
		directionNav: true,
		prevText: '',
		nextText: ''
	});

	$('#slider-2').flexslider({
		animation: 'fade',
		controlsContainer: '#slider-2',
		controlNav: false,
		namespace: 'work_slider-',
		directionNav: true,
		prevText: '',
		nextText: ''
	});

	$('#slider-3').flexslider({
		animation: 'fade',
		controlsContainer: '#slider-3',
		controlNav: false,
		namespace: 'work_slider-',
		directionNav: true,
		prevText: '',
		nextText: ''
	});

pic();

})