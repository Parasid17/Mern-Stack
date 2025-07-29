// REDUCE :-   24/07/2025

// -> The reduce() method is used to reduce an array to a single value — like a sum, product, max value, or even a new object or array.
// -> It works by applying a function to each element and carrying forward an accumulator.

// Syntax :
// -> array.reduce(callback(accumulator, currentValue), initialValue);
// accumulator: holds the result of the previous operation
// currentValue: the current item in the array
// initialValue: (optional) initial value of accumulator
// *** [NOTE:- if not assigned by default it takes the first element of the array] ***

// ----------------------------------------------------------------------------------------------
// Sum of Array elements:
// let arr = [2, 4, 6, 8];
// let res = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(res);     // 20


// ----------------------------------------------------------------------------------------------
// Product of Array elements:
// let arr = [2, 4, 6, 8];
// let ans = arr.reduce((acc, curr) => {
//     return acc * curr;
// }, 1)
// console.log(ans);     // 384


// ----------------------------------------------------------------------------------------------
// Maximum Element in Array:
// let arr = [2, 4, 6, 8];
// // let arr = [-1, -3, -2];
// let maxelem = arr.reduce((acc, curr) => {
//     // Method 1 -
//     // if (acc < curr) {
//     //     acc = curr;
//     // }
//     // return acc;

//     // Method 2 -
//     return Math.max(acc, curr);
// }, 0)
// console.log(maxelem);