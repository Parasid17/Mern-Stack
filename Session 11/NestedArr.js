// NESTED ARRAYS - 17/06/2025

// let arr = [1, 2, 3, 4, 5, 6];                // 1D array
// let arr2 = [[1, 2], [3, 4], [5, 6]];         // 2D array


// better readability
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// Accessing:
// console.log(arr[0]);     // [1, 2, 3]

// access each element
// to access 1
// console.log(arr[0][0]);    // 1
// console.log(arr[1][2]);    // 6


// Updation:
// arr[1][0] = 100;
// console.log(arr);

// arr[2] = [11, 12, 13];
// console.log(arr);



// Accessing using Loops:-
// Nested for loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// For of
// for (let elem of arr) {
//     for (let x of elem) {
//         console.log(x);
//     }
// }


// let arr2 = [1, 2, 3, 4];
// for (let elem in arr) {
//     console.log(arr2[elem]);
// }