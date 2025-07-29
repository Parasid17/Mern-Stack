// 2D Arrays:- 19/06/2025

// ************************************************************************************
// Transpose an array:
// [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// let rows = matrix.length;
// let cols = matrix[0].length;
// let trans = [];
// for (let i = 0; i < cols; i++) {
//     trans[i] = [];
//     for (let j = 0; j < rows; j++) {
//         trans[i][j] = matrix[j][i];
//     }
// }
// console.log(trans);

// ******* OR *******

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];
// let trans = [];

// for (let i = 0; i < arr[0].length; i++) {
//     trans[i] = [];
//     for (let j = 0; j < arr.length; j++) {
//         trans[i][j] = arr[j][i];
//     }
// }
// console.log(trans);


// ************************************************************************************
// [ [ 1, 5 ], [ 2, 6 ], [ 3, 4 ] ]
// let arr = [
//     [1,2,3],
//     [4,5,6]
// ]
// let Tarr = []
// for(let i=0 ; i < arr[0].length ; i++){
//     Tarr.push([])
// }
// for(let i=0 ; i < arr.length ; i++){
//     for(let j=0 ; j<arr[i].length ; j++){
//         Tarr[j].push(arr[i][(j+i)%arr[0].length]);
//     }
// }
// console.log(Tarr);



// ************************************************************************************
// Find the row with max sum
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [0, 1, 0]
// ];
// let maxSum = -Infinity;
// let maxindex = 0;
// let maxRow = [];

// for (let i = 0; i < arr.length; i++) {
//   let currentSum = 0;

//   for (let j = 0; j < arr[i].length; j++) {
//     currentSum += arr[i][j];
//   }

//   if (currentSum > maxSum) {
//     maxSum = currentSum;
//     maxRow = arr[i];
//     maxindex = i;
//   }
// }

// console.log(`Maximum Sum Row: ${maxRow} with index: ${maxindex}`);



// ************************************************************************************
// Print elements in a continuous manner:
// 1 2 3 6 5 4 7 8 9 12 11 10
// let matrix = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10,11,12]
// ];
// for (let i = 0; i < matrix.length; i++) {
//     if (i % 2 == 0) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             process.stdout.write(`${matrix[i][j]} `);
//         }
//     }
//     else {
//         for (let j = matrix[i].length - 1; j >= 0; j--) {
//             process.stdout.write(`${matrix[i][j]} `);
//         }
//     }
// }



// ************************************************************************************
// 90 Degree Rotation: always n x n matrix
// Input ->
// 1 2 4
// 2 3 5
// 6 7 8
// Output ->
// 6 2 1
// 7 3 2
// 8 5 4

// let arr = [
//     [1, 2, 4],
//     [2, 3, 5],
//     [6, 7, 8]
// ];

// function Deg90Rotation (arr) {
//     let mat = []
//     for (let i = 0; i < arr.length; i++) {
//         mat.push([]);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             mat[j].unshift(arr[i][j]);
//         }
//     }
//     return mat;
// }
// console.log(Deg90Rotation(arr));