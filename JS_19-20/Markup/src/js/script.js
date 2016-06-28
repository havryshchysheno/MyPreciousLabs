$(function() {


$('.accordion_head').on('click', accordeon)

$(".slider").slick({
	dots: true,
	dotsClass: 'slider_list',
        	slidesToShow: 1,
        	slidesToScroll: 1,
        	arrows: false
        });

	function accordeon (e) {
		var target = $(e.target).parent();
		var panel = target.children().filter('.accordion_link');
		var carret = target.children().filter('.accordion_carret');

		var accordion = $('.accordion_body');
		var accordionLink = $('.accordion_link');
		var accordionCarret = $('.accordion_carret');

		$(panel.attr('data-panel')).slideToggle('slow');
		accordion.not(panel.attr('data-panel')).slideUp('slow');

		panel.toggleClass('accordion_link--active');
		carret.toggleClass('accordion_carret--active');
		accordionLink.not(panel).removeClass('accordion_link--active');
		accordionCarret.not(carret).removeClass('accordion_carret--active');

		return false
	}





})