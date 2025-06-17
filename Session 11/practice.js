// Nested Arrays Practice Questions:-
 
// p1 Access a value: 40
// let arr = [[10, 20], [30, 40], [50, 60]];
// console.log(arr[1][1]);       // 40



// p2 Change a value: 90 to 50
// let arr = [[70, 80], [90, 100]];
// arr[1][0] = 50;
// console.log(arr);



// p3 Print All values(row by row):
// let arr = [[1, 2], [3, 4], [5, 6]];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }



// p4 Count total elements:
// let arr = [[1, 2, 3], [4, 5], [6]];
// nested loop
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         count++;
//     }
// }
// console.log(count);


// single loop
// for (let i = 0; i < arr.length; i++) {
//     count += arr[i].length;
// }
// console.log(count);




// p5 Sum of all elements
// let arr = [[2, 4], [6, 8], [10, 12]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log(`${sum}`);




// p6 Flatten the Nested Array
// let nested = [[1, 2], [3, 4], [5, 6]];
// let arr = [];
// for (let i = 0; i < nested.length; i++) {
//     for (let j = 0; j < nested[i].length; j++) {
//         arr.push(nested[i][j]);
//     }
// }
// console.log(arr);


// can also use flat()
// console.log(nested.flat());



// p7 Get first element of each inner array
// let arr = [[10, 20], [30, 40], [50, 60]];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i][0]);
// }



// p8 