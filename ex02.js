// Instructions: Use lodash's filter function to get only the even numbers from the array.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// function findEvens(n) {
//     if (n%2 === 0) {
//         return true
//     }
// }

const evens = _.filter(numbers, (item) => item%2 === 0)

console.log(evens); // Expected output: [2, 4, 6, 8]
