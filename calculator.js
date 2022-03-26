const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(sumArray) {
	n = sumArray.reduce(function(a, b) { return a + b; }, 0);
  return n;
};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce( (a,b) => a * b );
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};