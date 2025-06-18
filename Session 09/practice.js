// Arrays Practice Qquestions:-

// ************************************************************************************
// P1 Sum of All elements:

// Using for loop
// function SumOfAllElem(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4];
// console.log(SumOfAllElem(arr));


// Using for of
// function SumOfAllElem(arr) {
//     let sum = 0;
//     for (let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4];
// console.log(SumOfAllElem(arr));


// Using forEach()
// function SumOfAllElem(arr) {
//     let sum = 0;
//     arr.forEach((elem) => {
//         return sum += elem;
//     });
//     return sum;
// }
// let arr = [1, 2, 3, 4];
// console.log(SumOfAllElem(arr));



// ************************************************************************************
// P2 Find Maximum Element:

// function MaxElem (arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let arr = [10, 22, 5, 7];
// console.log(MaxElem(arr));



// ************************************************************************************
// P3 Count Even Numbers:

// Using for of
// function CountEvenNum (arr) {
//     let count = 0;
//     for (elem of arr) {
//         if (elem % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// let arr = [1, 4, 6, 7, 8];
// console.log(CountEvenNum(arr));

// Using forEach()
// function CountEvenNum (arr) {
//     let count = 0;
//     arr.forEach((elem) => {
//         if (elem % 2 == 0) {
//             count++;
//         }
//     }); 
//     return count;
// }
// let arr = [1, 4, 6, 7, 8];
// console.log(CountEvenNum(arr));



// ************************************************************************************
// P4 Reverse an Array:
// function reversearr (arr) {
//     let newarr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newarr.push(arr[i]);
//     }
//     return newarr;
// }
// let arr = [1, 2, 3];
// console.log(reversearr(arr));



// ************************************************************************************
// P5 Check if Array contains Element:

// Using for loop
// function CheckElement (arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (num === arr[i]) {
//             return true;
//         }
//     }
//     return false;
// }
// let arr = [5, 10, 15];
// let num = 10;
// console.log(CheckElement(arr,num));

// Using for of
// function CheckElement (arr, num) {
//     for (elem of arr) {
//         if (num === elem) {
//             return true;
//         }
//     }
//     return false;
// }
// let arr = [5, 10, 15];
// let num = 15;
// console.log(CheckElement(arr,num));



// ************************************************************************************
// P6 Find the Lenght of an Array:
// Method 1
// let arr = [4, 5, 6];
// console.log(arr.length);

// Method two - Using function
// function getlength (arr) {
//     return arr.length;
// }
// let arr = [4, 5, 6];
// console.log(getlength(arr));



// ************************************************************************************
// P7 Get the First element of array:
// function firstelem (arr) {
//     return arr[0];
// }
// let arr = [10, 20, 30];
// console.log(firstelem(arr));



// ************************************************************************************
// P8 Get the Last element of array:
// function LastElem (arr) {
//     return arr[arr.length - 1];
// }
// let arr = [1, 2, 3, 4];
// console.log(LastElem(arr));



// ************************************************************************************
// P9 Filter Numbers greater than 5:

// Using for loop
// function Numgrtthan5 (arr) {
//     let newarr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// let arr = [2, 6, 8, 3];
// console.log(Numgrtthan5(arr));

// Using for of
// function Numgrtthan5 (arr) {
//     let newarr = [];
//     for (let elem of arr) {
//         if (elem > 5) {
//             newarr.push(elem);
//         }
//     }
//     return newarr;
// }
// let arr = [2, 6, 8, 3];
// console.log(Numgrtthan5(arr));