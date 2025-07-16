// SORTING:-   15/07/2025

// Types of Sorting:

// 1. Selection Sort
// 2. Bubble Sort
// 3. Insertion Sort
// 4. Merge Sort
// 5. Quick Sort

// ==============================================================================================
// 1. Selection Sort -
// -> select minimum and swap
// Eg.:  7, 5, 2, 9, 8
     //  2, 5, 7, 9, 8    // pass 1
    //   ^
     //  2, 5, 7, 9, 8    // pass 2
    //   ^  ^
     //  2, 5, 7, 9, 8    // pass 3
    //   ^  ^  ^
     //  2, 5, 7, 8, 9    // pass 4
    //   ^  ^  ^  ^

// function selectionSort (arr, n) {
//     for (let i = 0; i < n-1; i++) {
//         let min = i;
//         for (let j = i; j < n; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         let temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
//     console.log(arr);
// }
// let arr = [7, 5, 9, 2, 4, 8];
// let n = arr.length;
// selectionSort(arr, n);

// Time Complexity:  O(n^2)
// Space Complexity: O(1)




// ==============================================================================================
// 2. Bubble Sort
// -> push max element to the last by adjacent swapping.
// Eg.:  7, 5, 9, 2, 8

    //   7, 5, 9, 2, 8   --|
    //   5, 7, 9, 2, 8     |
    //   5, 7, 9, 2, 8     |     pass 1
    //   5, 7, 2, 9, 8     |
    //   5, 7, 2, 8, 9   --|     (9 has been pushed to the last)
    
    //   5, 7, 2, 8, 9   --|
    //   5, 7, 2, 8, 9     |     pass 2
    //   5, 2, 7, 8, 9     |
    //   5, 2, 7, 8, 9   --|     (8, 9 are on the right position)
    
    //   5, 2, 7, 8, 9   --|
    //   2, 5, 7, 8, 9     |     pass 3
    //   2, 5, 7, 8, 9   --|     (7, 8, 9 are on the right position)
    
    //   2, 5, 7, 8, 9   --|     pass 4
    //   2, 5, 7, 8, 9   --|     (5, 7, 8, 9 are on the right position)

// The whole array is sorted.

// ----------------------------------------------------------------------------------------------
// Method 1
// function bubbleSort () {
//     for (let i = n-1; i >= 1; i--) {
//         for (let j = 0; j < i-1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     console.log(arr);
// }
// let arr = [7, 5, 9, 2, 8];
// let n = arr.length;
// bubbleSort();

// ----------------------------------------------------------------------------------------------
// Method 2
// function bubbleSort () {
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n-i-1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }
//     console.log(arr);
// }
// let arr = [7, 5, 9, 2, 8];
// let n = arr.length;
// bubbleSort();

// ----------------------------------------------------------------------------------------------
// What if array is already sorted? -
// function bubbleSort () {
//     for (let i = n-1; i >= 1; i--) {
//         let isSwapped = false;
//         for (let j = 0; j < i-1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//                 isSwapped = true;
//             }
//         }
//         if (isSwapped === false) {
//             break;
//         }
//         console.log("running");    // to check
//     }
// }
// let arr = [2, 5, 7, 8, 9];
// let n = arr.length;
// bubbleSort();




// ==============================================================================================