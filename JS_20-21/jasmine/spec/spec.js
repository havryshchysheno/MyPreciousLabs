'use strict'

var app = require ('../js/script');

describe("numberStep", function() {
	it("it should call numberStep function", function() {
	// prepare
  	var result, result2, result3;
  	
  	// act
  	result = app(2, 2);
  	result2 = app (3, 2);
  	result3 = app (5, 1);
  	//assert
  	expect(result).toBe(4);
  	expect(result2).toBe(9);
  	expect(result3).toBe(5);
  });
});