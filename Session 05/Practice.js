// Loops Practice Questions:-
// ************************************************************************************
// P1 Printing Students Roll Numbers
// for (let i = 1; i <= 20; i++) {
//     console.log(`Roll no.: ${i}`);
// }



// ************************************************************************************
// P2 Square of Numbers from 1 - 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`Square of ${i} is ${i*i}`);
// }



// ************************************************************************************
// P3 Sum of Even Numbers till 50
// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(`Sum of Even Numbers: ${sum}`);

// OR

// let sum = 0;
// for(let i = 2; i <= 50; i += 2) {
//     sum += i;
// }
// console.log(sum);



// ************************************************************************************
// P4 Battery Charging Display While Loop
// let level = 10;
// while(level <= 100) {
//     console.log(`Charging Level: ${level}%`);
//     level+= 10;
// }



// ************************************************************************************
// P6 Countdown timer
// let i = 10;
// while (i > 0) {
//     console.log(`Countdown Timer ${i}`);
//     i--;
// }



// ************************************************************************************
// Q1 Print multiplication Table of number
// let n = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i}`);
// }



// ************************************************************************************
// Q3 Calculate Sum of Digits of Number
// let  n = 1234;
// let sum = 0;
// while (n > 0) {
//     sum += n%10;
//     n = Math.floor(n/10);
// }
// console.log(`Sum of Digits: ${sum}`);



// ************************************************************************************
// Q4 Print All Characters of a String One by One
// let str = "HELLO";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }



// ************************************************************************************
// Q5 Find Factorial 
// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(`Factorial of ${n} is ${fact}`);



// ************************************************************************************
// Q7 Count How many numbers between 1 - 50 divisible by 7
// let count = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 7 == 0) {
//         count++;
//     }
// }
// console.log(count);



// ************************************************************************************
// Q1. Hotel Room Booking Availability Tracker
// for (let flr = 1; flr <= 5; flr++) {
//     for (let room = 1; room <= 10; room++) {
//         if (room === 3 || room === 8) {
//             continue;
//         }
//         console.log(`Floor ${flr} - Room ${room}`);
//     }
// }



// ************************************************************************************
// Q2 Reverse given Number and check if palindrome
// let n = 121;
// let original = n;
// let rev = 0;

// while (n > 0) {
//     let a = n%10;
//     rev = (rev * 10) + a;
//     n = Math.floor(n/10);
// }
// console.log(rev);

// if (rev == original) {
//     console.log("palindrome");
// }
// else {
//     console.log("Not a Palindrome");
// }