const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(list) {
	return list.reduce((a, b) => a + b, 0);
};

const multiply = function(list) {
  return list.reduce((a, b) => a * b);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 1 || a == 0) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
