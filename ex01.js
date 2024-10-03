// Instructions: Use lodash's map function to double each number in the array.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

// function multiple(n) {
//     return n*2
// }

const doubled = _.map(numbers, (item) => item*2)

console.log(doubled); // Expected output: [2, 4, 6, 8, 10]
