"use strict";

var funcSqrt = function funcSqrt(t) {
  return t * t * 30;
};
var funcSqrtThenMultiple = function funcSqrtThenMultiple(t) {
  return funcSqrt(t) * 2;
};

var sqrt10 = funcSqrt(10);
var sqrtThenMultiple10 = funcSqrtThenMultiple(10);

console.log("sqrt10:" + sqrt10);
console.log("sqrtThenMultiple10:" + sqrtThenMultiple10);