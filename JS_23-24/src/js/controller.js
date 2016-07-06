define (
    'controller',
    ['model', 'view', 'jquery'],
    function (model, view) {

        function Controller (model, view) {
           var self = this;

           view.elements.addBtn.on('click', addItem);
           view.elements.listContainer.on('click','.list_input', addData);
           view.elements.listContainer.on('click', '.delete-btn', removeItem);

	function addItem () {
		var newItem = '';
		model.additem(newItem);
		view.renderList(model.data);
	}

	function addData (e) {
		var currData = $(e.target).val();

		$(e.target).focusout(function( event ) {
			var newData = $(e.target).val();
			model.updateItem(currData,newData);
		});
		
		$(e.target).keyup(function (e) {
			var code = e.which;
			if (code == 13) {
				var newData = $(e.target).val(); 
				model.updateItem(currData,newData);
				addItem();
			}
		})
	}

	function removeItem () {
		var item = $(this).attr('data-input');
		var items = []
		var item2 = $('input:checkbox:checked');

		for (var i = 0; i < item2.length; i++) {
			var index = $(item2[i]).attr('data-input')
			items.push(index);	
		}

		model.removeItem(items);
		view.renderList(model.data);
	}
}

	var controller = new Controller(model, view);
	return controller;
}
);
