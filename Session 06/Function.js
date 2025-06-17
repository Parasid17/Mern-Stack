// LOOPS DAY 2 - 05/06/2025

// Function Basics:-

// 1. Traditional Function:
// function func_name () {
//     // body
// }

// function greet() {
//     console.log("Hello!");
// }
// greet();


// function sum(a, b) {
//     let res = a + b;
//     // console.log(res);
//     return res;
// }
// console.log(sum(5,3));


// function reverseInteger(n) {
//     let rev = 0;
//     while (n > 0) {
//         let x = n % 10;
//         rev = (rev * 10) + x;
//         n = Math.floor(n / 10);
//     }
//     return rev;
// }
// console.log(reverseInteger(1234));



// Function Scope (var):

// var a = 2;
// console.log(a);      // 2
// function one() {
//     console.log(a);     // 2
//     var b = 4;
//     console.log(b);    // 4
// }

// console.log(b);     // Error

// if (true) {
//     var c = 6;
//     console.log(c);       // 6
// }

// console.log(c);          // 6

// function two() {
//     if (true) {
//         var d = 8;
//         console.log(d);     // 8
//     }
//     console.log(d);         // 8
// }

// console.log(d)        // Error   (d not defined)

// one();
// two();



// Function Scope (let & const):
// let a = 2;
// console.log(a);      // 2    (scope global)
// function one() {
//     console.log(a);     // 2
//     let b = 4;
//     console.log(b);    // 4       (scope becomes function)
// }

// console.log(b);     // Error

// if (true) {
//     let c = 6;
//     console.log(c);       // 6      (scope becomes block) 
// }

// console.log(c);          // Error      

// function two() {
//     if (true) {
//         let d = 8;
//         console.log(d);     // 8
//     }
//     console.log(d);         // Error
// }

// console.log(d)        // Error   (d not defined)

// one();
// two();


// {
//     let x = 9;
//     console.log(x);      // 9
// }
// console.log(x);      // Error (x is not defined)


// {
//     var x = 9;
//     console.log(x);    // 9
// }
// console.log(x);   // 9