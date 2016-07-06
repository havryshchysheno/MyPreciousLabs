define (
	'view',
	['model', 
	'jquery', 
	'tmpl'],
	function (model) {
		 function View (model) {
		 	var self = this;
		 	function init () {
		 	 	var wrapper = tmpl($('#todo_wrapper').html());
		 	 	$('body').append(wrapper);

		 	 	self.elements = {
		 	 		input: $('.list_input'),
		 	 		addBtn: $('.add_btn'),
		 	 		listContainer: $('.list'),
		 	 		delBtn: $('.delete-btn'),
		 	 		checkbox: $('.custom-checkbox')
		 	 	};
		 	 	self.renderList(model.data);
		 	 }

		 	 self.renderList = function (data) {
		 	 	var list = tmpl($('#list_tmpl').html(), {data: data});
		 	 	self.elements.listContainer.html(list);
		 	 	self.checkInit();
		 	 };

		 	self.checkInit = function () {
		 		$('.custom-checkbox').mousedown(
		 			function () {
		 			changeCheck($(this))
		 		});

		 		function changeCheck (el) {
		 			var check = el.find('input:checkbox');
                				var input = el.parent().siblings('.list_input');
                				if (!input.hasClass('custom-checkbox--active')) {
						el.toggleClass('custom-checkbox--active');
						input.toggleClass('list_input--active');
						input.next().toggleClass('delete-btn--active');

						if (input.hasClass('list_input--active')) {
							input.prop( "disabled", true );
							check.attr('checked', true);
						} else {
							input.prop( "disabled", false );
							check.attr('checked', false);
						}
					}
				}
			};

		 	init();
		 	
		 	}

		 	var view = new View(model);
		 	return view;
		 }
	);
