$(function () {
'use strict'

var formData = {
	title_head: 'Тест по программированию',
	button: 'Проверить результаты',
}

var questions = [
	{
		title: 'Какой тег для заголовка',
		answers: ['h1', 'p', 'li'],
		correct: 'h1'
	},
	{
		title: 'Какая современная версия HTML',
		answers: ['HTML2', 'HTML3', 'HTML5'],
		correct:  'HTML5'
	},
	{
		title: 'Какой тег для разметки нумерованого списка',
		answers: ['ul','ol', 'div'],
		correct:  'ol'
	}
];

class Data {
	constructor (form, questions) {
		this.form = form;
		this.questions = questions;
	}

	build (target) {
		const store = () => {
			const storage = JSON.stringify(this.questions);
			localStorage.setItem('test', storage);
		};

		const render = () => {
			const loc = localStorage.getItem('test');
			const storageQuestions = JSON.parse(loc);
			const template = _.template($('#lodash').html());

			$(target).append(template(
					{
						formData, 
						storageQuestions
					}
				));
		};

		try {
			render();
		} catch (err) {
			store();
			render();
		}
	}

	showModal () {
		$('.overlay').fadeIn(400, () => 
		{
			$('.modal-container').show().animate({opacity: 1, top: '50%'}, 200);
		});
	}

	hideModal () {
		$('.modal__close, .overlay').on('click', () => {
			$('.modal-container')
						.animate({opacity: 0, top: '45%'}, 200,
						function(){
							$(this).hide(); 
							$('.overlay').fadeOut(400);
							});
			$('input:checked').prop('checked', false);
 		});
 		
	}

	checkResult (input) {
		$(input).on('click', () => {
			const loc = localStorage.getItem('test');
			const storageQuestions = JSON.parse(loc);
			const selected = $('input:checked');
			let correct = [];
			let result = 0;

			storageQuestions.forEach(function (arr) {
				correct.push(arr.correct);
			})

			for (var i = 0; i < selected.length; i++) {
				if (selected[i].getAttribute('id') === correct[i]){
			 		result +=33
			 	} else {
			 		result +=0
			 	}
			 }

			if (result >= 67){
				$('.result').text('100');
			} else {
				$('.result').text(result);
			}

			this.showModal();

			return false;
		});
	}
}

const app = new Data(formData, questions);

app.build('body');
app.hideModal();
app.checkResult('#submit');
})

