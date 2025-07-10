// LINEAR SEARCH:-  08/07/2025;

// let arr = [1, 2, 5, 28, 48, 20, 10, 48, 3];
// let arr = [];

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == target) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(linearSearch(arr, 10));

// Time Complexity -> O(n)
// Space Complexity -> O(1)



// ==============================================================================================
// BINARY SEARCH:-

// let arr = [2, 5, 7, 8, 12, 45, 78, 96];

// function binarySearch (arr, target) {
//     let s = 0;
//     let e = arr.length - 1;
    
//     while (s <= e) {
//         let mid  = Math.floor(s + (e - s) / 2);
        
//         if (target < arr[mid]) {
//             e = mid - 1;
//         }
//         else if (target > arr[mid]) {
//             s = mid + 1;
//         }
//         else {
//             return mid;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(arr, 12));

// Time Complexity -> O(logn)
// Space Complexity -> O(1)



// ############################################## REVISION ##############################################

// SET:-

// let set = new Set();

// add() -
// set.add(2);
// set.add(false);
// set.add("Hello");
// console.log(set);

// delete() -
// set.delete(2);
// console.log(set);

// has() -
// console.log(set.has(4));              // false
// console.log(set.has("Hello"));        // true

// clear() -
// set.clear();
// console.log(set);

// size -
// console.log(set.size);

// Traversing:
// for of -
// for (elem of set) {
//     console.log(elem);
// }

// forEach -
// set.forEach(elem => {
//     console.log(elem);
// });



// ==============================================================================================
// MAP:-

// let map = new Map();

// set() -
// map.set("name", "John");
// map.set("age", 23);
// map.set("place", "Pune");
// console.log(map);

// Without set() -
// let map = new Map([
//     ["name", "John"],
//     ["age", 25],
//     ["place", "Pune"]
// ]);
// console.log(map);

// get() -
// console.log(map.get("age"));

// has() -
// console.log(map.has("place"));

// delete() -
// map.delete("name");
// console.log(map);

// clear() -
// map.clear();
// console.log(map);

// size -
// console.log(map.size);

// Traversing -
// for of -
// for (let [key, value] of map) {
//     console.log(key, value);
// }
// for (let elem of map) {
//     console.log(elem);
// }

// for of with keys() -
// for (let key of map.keys()) {
//     console.log(key);
// }

// for of with values() -
// for (let value of map.values()) {
//     console.log(value);
// }

// for of with entries() -
// for (let [key, value] of map.entries()) {
//     console.log(key, value);
// }

// map.forEach((value, key) => {
//     console.log(`${key} : ${value}`);
// });