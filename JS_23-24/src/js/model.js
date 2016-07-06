define (
	'model',
	[],
	function () {

	function Model(data) {
		self = this

		self.data = data;

		self.additem = function (item) {
			if (item === 0) {
				return
			}

			self.data.push(item);
		}

		self.removeItem = function () {

			for (var i = 0; i < arguments[0].length; i ++) {
				var value = arguments[0][i];
				var index = self.data.indexOf(value);

				self.data.splice(index, 1)
			}

			return self.data
		}


		self.updateItem = function (prev, next) {
			var index = self.data.indexOf(prev);

			self.data.splice(index, 1, next)

			return self.data
		}

	}

        var data = ["Learn ES6"];
        var model = new Model(data);
        return model;
    }
);
