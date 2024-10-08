const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let sum=0;
  for (i of array) {
    sum+=i;
  }
  return sum;
};

const multiply = function(array) {
  let ans=1;
  for (i of array) {
    ans*=i;
  }
  return ans;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if (n===0) {
    return 1;
  }
  let product=1;
  for (let i=n;i>0;i--) {
    product*=i;
  }
  return product;
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
