/**
 * URL- https://devtools.tech/questions/s/what-is-the-output-of-the-following-code-snippet-or-javascript-bind-output-based-questions---qid---XXstfZHaLaR54lSmoyjy
 */

var foo = 1;
var change = () => {
  this.foo = 2;
  console.log(this.foo); // arrow function does not have its own this hence op - 1
};
var obj = {
  foo: 3
};
var bounded = change.bind(obj); // bind does not work on arrow function

// What would be the output of the following?
console.log(foo); // 1
console.log(change()); // 2 + undefined
console.log(foo); // 2
console.log(obj.foo); 3
console.log(bounded()); 2 + undefined



