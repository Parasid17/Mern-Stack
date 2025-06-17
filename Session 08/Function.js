// Funtions - 10/06/2025
// Has Two types:
// 1) Tradiitional Function: studied in previous session

// 2) Function Expression:-
// It has more two types:

// 1. Anonymous Function - 
// let sum = function (a, b) {
//     let res = a + b;
//     return res;
// }

// let x = sum(4, 5);
// console.log(x);
// OR
// console.log(sum(4, 5));


// 2. Arrow Funtion - 
// let sum = (a, b) => {
//     let res = a + b;
//     return res;
// }
// console.log(sum(4, 5));

// We can aslo do this:
// let sum = (a, b) => return a + b;      // giving error on return keyword because it's a special case that - no need to return anything to the function.

// so the correct way is:
// let sum = (a, b) => a + b;
// console.log(sum(4,5));

// What if you have a single varible/ parameter:
// let display = a => "Hello";
// console.log(display(7));


// Math.abs --> abs is absolute 
// it converts negative values to positive
// convert to string and handle negatives
// convert digit to string
// console.log(Math.abs(-5));   // 5

// let n = 273648;
// n = n.toString()    // to convert into string