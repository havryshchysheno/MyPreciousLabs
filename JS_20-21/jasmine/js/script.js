try {
	document.getElementById('row').addEventListener('click', numberStep);
	document.getElementById('user').addEventListener('click', userCheck);
} catch (err) {

}

function numberStep (x, y) {
		var num = x;
		var numStep = y;
		var result = 1;

		if (num > 0) {

				for (var i = 0; i < numStep; i++) {
						result *= num;
				}

				return result;
				//alert ('Your result is ' + result);
		} else {
				//alert ('Please enter some data')
		}
}

function userCheck () {
		var users = [];

		for (var i = 0; i < 5; i++) {
			users.push(prompt('Please enter new name'));
		}
		
		var checkFlag = false;
		var newUser = prompt('Please enter your name');

		for (var i = 0; i < users.length; i++) {
				if (users[i] === newUser) {
						checkFlag = true;
						break;
				} 
		}

		if (checkFlag) {
				alert('Hello ' + newUser);
		} else {
				alert ('Error');
		}
}

module.exports = numberStep;