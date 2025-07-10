// Prcatice:-  

// P1 Count Unique Elements in an Array:
// let arr = [2, 4, 5, 7, 4, 8, 4, 7, 6, 2, 2];
// function countUniqueElem (arr) {
//     // let set = new Set(arr);
//     // return set.size;
    
//     // Mehtod 2
//     // Using for loop
//     let set = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         set.add(arr[i]);
//     }
//     return set.size;
// }



// ==============================================================================================
// P2 Check for Duplicates:
// let arr = [2, 4, 5, 7, 4, 8, 4, 7, 6, 2, 2];
// let set = new Set(arr);
// function checkDuplicate (arr, set) {
//     // if (arr.length == set.size) {
//     //     return true;     // no duplicates
//     // }
//     // else {
//     //     return false;    // duplicates found
//     // }

//     // Method 2
//     // Using for of loop
//     for (let elem of arr) {
//         if (set.has(elem)) {
//             return true;      // duplicate found
//         }
//         set.add(elem);
//     }
//     return false;
// }
// console.log(checkDuplicate(arr, set));



// ==============================================================================================
// P3 Character Frequency using Map:
// let str = "hellloo";

// function charFreq (str) {
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         if (map.has(ch)) {
//             map.set(ch, map.get(ch) + 1);
//         }
//         else {
//             map.set(ch, 1);
//         }
//     }
//     return map;
// }
// console.log(charFreq(str));



// ==============================================================================================
// P4 Find First reapting element:
// let arr = [1, 2, 3, 2, 4, 4, 5, 6];

// function reaptingElem (arr) {
//     let set = new Set();
//     for (let i = 0; i < arr.length; i++) {
//         if (set.has(arr[i])) {
//             return arr[i];
//         }
//         set.add(arr[i]);
//     }
//     return null;
// }
// console.log(reaptingElem(arr));