$(function () {
	
	$('.holidays_grid').masonry({
		itemSelector: '.holidays-item'
	});

	getImage('.holidays_button');

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


function getImage (item) {
	$(item).on('click', getImage);
	var input = $('.holidays_input').val();

$.ajax({
	url : "http://api.flickr.com/services/feeds/photos_public.gne",
	dataType: 'jsonp',
	data: { "tags": input, "format": "json" }
});

	jsonFlickrFeed = function(d){
		var json = d;
		var url = [];
		var title = [];
		var data = [url, title];

		for (var i = 0; i < 7; i++) {
			url.push(json.items[i].media.m.replace('_m', '_z'));
			title.push(json.title.replace('Recent Uploads t', 'T'));
			};

		var template = tmpl($('#image_tmpl').html(), {data: data});
		
		$('.holidays_grid').html(template);
	};

	return false;
}

	
})