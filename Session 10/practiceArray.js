// Arrays Practice Questions:- (continued)

// ************************************************************************************
// P10 Double Each Element in Array
// let arr = [1, 2, 3];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]*2);
// }
// console.log(arr2);

// OR

// function doubleElem(arr) {
//     let result = [];
//     for (let elem of arr) {
//         result.push(elem * 2);
//     }
//     return result;
// }

// let arr = [1, 2, 3];
// let x = doubleElem(arr);
// console.log(x);




// New Question Set:-
// ************************************************************************************
// P1 Print All Elements using forEach
// let arr = [10, 20, 30];

// arr.forEach((elem) => {
//     console.log(elem);
// })

// OR 
// function printElems(arr) {
//     arr.forEach((elem, index) => {
//         console.log(elem, index);
//     });
// }
// printElems(arr);



// ************************************************************************************
// P2 Double Each Element using map
// let arr = [1, 2, 3];
// let newarr = arr.map((elem) => {
//     return elem * 2;
// });
// console.log(arr);
// console.log(newarr);

// OR
// function doubleElem(arr) {
//     let newarr = arr.map((elem) => {
//         return elem * 2;
//     });
//     return newarr;
// }
// let arr = [1, 2, 3];
// console.log(doubleElem(arr));



// ************************************************************************************
// P3 Get only even numbers using filter
// function evennum(arr) {
//     let newarr = arr.filter((elem) => {
//         return elem%2 == 0;
//     });
//     return newarr;
// }
// let arr = [1, 2, 3, 6, 8, 29, 20, 40, 39];
// console.log(evennum(arr));



// ************************************************************************************
// P4 Add "Hi" before each name using map
// function addHi(arr) {
//     let newarr = arr.map((elem) => {
//         return `Hi ${elem}`;
//     });
//     console.log(newarr);
// }
// let arr = ["Alice", "Bob"];
// addHi(arr);



// ************************************************************************************
// P5 Count positive numbers using forEach
// function countPositive(arr) {

//     let count = 0;

//     arr.forEach(element => {
//         if (element > 0) {
//             count++;
//         }
//     });

//     return count;

// }
// let arr = [1, 2, -23, 34, -188, 0, -25];
// console.log(countPositive(arr));



// ************************************************************************************
// P6 Convert All Strings to Uppercase using map
// function Uppercase(arr) {

//     let newarr = arr.map((elem) => {
//         return elem.toUpperCase();
//     });
//     console.log(newarr);
// }
// let arr = ["apple", "Banana", "cherry"];
// Uppercase(arr);



// ************************************************************************************
// P7 Find all numbers greater than 50 using filter
// function Greaterthan50(arr) {
//     let newarr = arr.filter((num) => {
//         return num > 50;
//     });
//     console.log(newarr);
// }
// let arr = [10, 60, 45, 80, 30];
// Greaterthan50(arr);



// ************************************************************************************
// P8 Print each element with its index using forEach
// function ElemwithIndex(arr) {
//     arr.forEach((elem, index) => {
//         console.log(`Element: ${elem} , Index: ${index}`);
//     });
// }
// let arr = ["x", "y", "z"];
// ElemwithIndex(arr);



// ************************************************************************************
// P9 Add 10 to each number using map
// function add10(arr) {
//     let newarr = arr.map((elem) => {
//         return elem + 10;
//     });
//     console.log(newarr);
// }
// let arr = [5, 10, 15];
// add10(arr);