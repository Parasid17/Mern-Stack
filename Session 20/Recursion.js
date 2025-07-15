// RECURSION:-   10/07/2025

// -> function calls itself until it reaches to a base case/condition.
// -> There are two steps of analysis:
    // 1. High level analysis.
    // 2. Low level analysis.      --> dry run (to identify base case)     [Dry run - Not always required]

// 1. High level analysis:
// -> It has three steps -
    // a) Expectation.
    // b) Faith.
    // c) Relation b/w Expectation and Faith.

// Eg. print in decending:-
// function pd(n) {
//     console.log(n);
//     // recursive call
//     pd(n-1);
// }
// // function call
// pd(5);

// There's a problem here --> it will run for to long as any base case is not given so it will not know where to stop.

// So, adding the base case:
// function pd(n) {
//     // base case
//     if (n == 0) {
//         return;
//     }
//     console.log(n);
//     // recursive call
//     pd(n-1);
// }
// // function call
// pd(5);


// ==============================================================================================
// Eg. print in increasing:-
// Method 1 -
// function pi(n, end) {
//     // base case
//     if (n > end) {
//         return;
//     }
//     console.log(n);
//     // recursive call
//     pi(n+1, end);
// }
// pi(1, 5);

// Method 2 -
// function pi(n) {
//     // base case
//     if (n == 0 ) {
//         return;
//     }
//     // recursive call
//     pi(n-1);
//     console.log(n);
// }
// pi(5);



// ==============================================================================================
// print decresing and then incresing:-
// function pdi(n) {
//     // base case
//     if (n == 0) {
//         return;
//     }
//     console.log(n);
//     // recursive call
//     pdi(n-1);
//     console.log(n);
// }
// pdi(5);

// -> When some code is written before recursive function call, it gets executed going upward in the call stack.
// -> When some code is written after recursive function call, it gets executed going downward in the call stack.



// ==============================================================================================
// factorial of a number:
// function factorial(n) {
//     // base case
//     if (n == 0) {
//         return 1;
//     }
//     // recursive call
//     return n * factorial(n-1);
// }
// console.log(factorial(5));



// ==============================================================================================
// power of x raised to n:
// function power(x, n) {
//     // base case
//     if (n == 0) {
//         return 1;
//     }
//     // recursive call
//     return x * power(x, n-1);
// }
// console.log(power(2, 3));



// ==============================================================================================
// print array elements:
// function arrelem(arr, index) {
//     // base case
//     if (index == arr.length) {
//         return;
//     }
//     console.log(arr[index]);
//     // recursive call
//     arrelem(arr, index + 1);
// }
// let arr = [2, 4, 6, 8];
// arrelem(arr, 0);



// ==============================================================================================
// find max element:
// With Math.max() -
// function findMax(arr, index) {
//     // base case
//     if (arr.length - 1 == index) {
//         return arr[index];
//     }
//     // recursive call
//     return Math.max(findMax(arr, index + 1), arr[index]);
// }
// let arr = [5, 3, 9, 7, 8];
// console.log(findMax(arr, 0));

// Without Math.max() -
// function findMax(arr, index) {
//     // base case
//     if (arr.length - 1 == index) {
//         return arr[index];
//     }
//     // recursive call
//     if (arr[index] < findMax(arr, index + 1)) {
//         return findMax(arr, index + 1);
//     }
//     return arr[index];
// }
// let arr = [5, 3, 9, 7, 8];
// console.log(findMax(arr, 0));