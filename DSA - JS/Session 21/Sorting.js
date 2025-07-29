// SORTING:-   15/07/2025

// Types of Sorting:

// 1. Selection Sort
// 2. Bubble Sort
// 3. Insertion Sort
// 4. Merge Sort
// 5. Quick Sort

// ==============================================================================================
// 1. Selection Sort -
// ***************** Theory ********************
// -> select minimum and swap
// Eg.:  7, 5, 2, 9, 8
     //  2, 5, 7, 9, 8    // pass 1
     //  ^
     //  2, 5, 7, 9, 8    // pass 2
     //  ^  ^
     //  2, 5, 7, 9, 8    // pass 3
     //  ^  ^  ^
     //  2, 5, 7, 8, 9    // pass 4
     //  ^  ^  ^  ^
// ********************* END ********************

// CODE:-
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
// 2. Bubble Sort -
// ***************** Theory ********************
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
// ********************* END ***********************

// CODE:-
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

// Time Complexity:  O(n^2)
// Space Complexity: O(1)




// ==============================================================================================
// 3. Insertion Sort -
// ***************** Theory ********************
// -> take an element and place it in its correct order
// Eg.: 12, 43, 21, 53, 17, 8
// 12, 43, 21, 53, 17, 8
// 12, 21, 43, 53, 17, 8
// 12, 21, 43, 53, 17, 8
// 12, 17, 21, 43, 53, 8
// 8, 12, 17, 21, 43, 53
// ********************* END ***********************

// CODE:-
// function insertionSort() {
//     for (let i = 0; i < n; i++) {
//         let j = i;
//         while (j >= 0 && arr[j - 1] > arr[j]) {
//             [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//             j--;
//         }
//     }
//     console.log(arr);
// }

// let arr = [12, 43, 21, 53, 17, 8];
// let n = arr.length;
// insertionSort();




// ==============================================================================================
// 4. Merge Sort -
// ***************** Theory ********************
// -> a. divide
// -> b. sort and merge

//  step 1 - divide
// 
//       [4,2,3,1]
//         /   \
//      [4,2]  [3,1]
//      / \     / \
//    [4] [2]  [3] [1]

//  step 2 - sort & merge
// 
//    [4] [2]  [3] [1]
//     \   /    \   /
//     [2,4]    [1,3]
//        \      /
//       [1,2,3,4]

// Steps:
// 1. find the middle index
// 2. recursively split the array into left and right half
// 3. combine: merge the sorted half and produce a fully sorted array

// 1)  Break the array
    // - keep splitting the array into two half until each half contains only one element 
    // - a single element is always sorted

// 2)  merge the arrays
    // - combine two sorted half into single sorted array
    // - compare the smallest elements of both halves and add the smaller one to the result

// dry run
// [38, 27, 43, 3, 9, 82, 10]

// step 1: divide
// 1st split: [38, 27, 43, 3]         [9, 82, 10]
// 2nd split: [38, 27]  [43, 3]      [9, 82]  [10]
// 3rd split: [38]  [27]  [43]  [3]       [9]  [82]  [10]

// step 2: conquer (sort and merge)
// 1. merge [38] and [27]
// compare 38 and 27 => [27, 38]

// 2. merge [43] and [3]
// compare 43 and 3 => [3, 43]

// 3. merge [9] and [82]
// compare 9 and 82 => [9, 82]

// 4. merge [10] => [10]

// step 3: combine sorted half
// 1. merge [27, 38] and [3, 43]
// compare 27 and 3 => [3]
// compare 27 and 43 => [3, 27]
// compare 38 and 43 => [3, 27, 38]
//      [3, 27, 38, 43]
// result: [3, 27, 38, 43]

// 2. merge [9, 82] and [10]
// compare 9 and 10 => [9]
// compare 82 and 10 => [9, 10]
//      [9, 10, 82]
// result: [9, 10, 82]

// FINAL Merge
// combine [3, 27, 38, 43] and [9, 10, 82]
//        i = 0     j = 0
// compare 3 and 9 => [3]
//        i = 1     j = 0
// compare 27 and 9 => [3, 9]
//        i = 1     j = 1
// compare 27 and 10 => [3, 9, 10]
//        i = 1     j = 2
// compare 27 and 82 => [3, 9, 10, 27]
//        i = 2     j = 2
// compare 38 and 82 => [3, 9, 10, 27, 38]
//        i = 3     j = 2
// compare 43 and 82 => [3, 9, 10, 27, 38, 43]
//        i = 4     j = 2
// compare 43 and 82 => [3, 9, 10, 27, 38, 43]

// SORTED Array ==>  [3, 9, 10, 27, 38, 43, 82]
// ********************* END ***********************

// CODE:-
// function mergeSort(arr) {
//     // base case
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // step 1: divide
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     // step 2: sort and merge
//     return merge(mergeSort(left), mergeSort(right));

// }
// // helper funtion for merging
// function merge(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         }
//         else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     while (i < left.length) {
//         result.push(left[i]);
//         i++;
//     }
//     while (j < right.length) {
//         result.push(right[j]);
//         j++;
//     }
//     return result;
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(mergeSort(arr));




// ==============================================================================================
// 5. Quick Sort -
// ***************** Theory ********************
// -> a. Pick a pivot: choose one element from the array (can be any element)
// -> b. Partition: arrange element so that -
    // - all elements smaller than pivot go to its left
    // - all elements larger than pivot go to its right
// -> c. Recursively sort: apply quick sort to the left and right parts until whole array is sorted.

// dry run
// [38, 27, 43, 3, 9, 82, 10]

// 1. first call
// pivot = 10
// left : [3, 9]
// right : [38, 27, 43, 82]
// result : [...qs([3, 9]), 10, ...qs([38, 27, 43, 82])]

// 2. sorting [3, 9]
// pivot = 9
// left : [3]
// right : []
// result : [3, 9]

// 3. sorting [38, 27, 43, 82]
// pivot = 82
// left : [38, 27, 43]
// right : []
// result : [...qs([38, 27, 43]), 82]

// 4. sorting [38, 27, 43]
// pivot = 43
// left : [38, 27]
// right : []
// result : [...qs([38, 27]), 43]

// 5. sorting [38, 27]
// pivot = 27
// left : []
// right : [38]
// result : [27, ...qs([38])]

// RESULT : [3, 9, 10, 27, 38, 43, 82]

// Let's walk through how the final result is built step-by-step from your dry run
// Step 5: Sorting [38, 27]
// pivot = 27
// left : [38, 27]  ->  [27, 38]  (from Step 5)
// right : []
// result : [27, 38, 43]

// Step 4: Sorting [38, 27, 43]
// pivot = 43
// left : []
// right : [38]
// result : [27, ...qs([38])]

// Step 3: Sorting [38, 27, 43, 82]
// pivot = 82
// left : [38, 27, 43]  ->  [27, 38, 43]  (from Step 4)
// right : []
// result : [27, 38, 43, 82]

// Step 2: Sorting [3, 9]
// pivot = 9
// left : [3]
// right : []
// result : [3, 9]

// Step 1: Sorting [38, 27, 43, 3, 9, 82, 10]
// pivot = 10
// left : [3, 9]  ->  [3, 9]  (from Step 2)
// right : [38, 27, 43, 82]  ->  [27, 38, 43, 82]  (from Step 3)
// Result : [3, 9, 10, 27, 38, 43, 82]

// Final Combined Result:
// [3, 9] + [10] + [27, 38, 43, 82]
// => [3, 9, 10, 27, 38, 43, 82]
// ********************* END ***********************

// CODE:-
// function quickSort (arr) {
//     // base case
//     if (arr.length <= 1) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         }
//         else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let arr = [38, 27, 43, 3, 9, 82, 10];
// console.log(quickSort(arr));