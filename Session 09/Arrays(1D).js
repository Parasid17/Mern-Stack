// 1D Arrays:-    12/06/2025

// let st1_marks = 2;
// let st2_marks = 4;
// let st3_marks = 6;
// let st4_marks = 3;
// let st5_marks = 5;

// Instead of this we can also use arrays:
// let marks = [2, 4, 6, 3, 5];
// console.log(`Marks of Student 3: ${marks[2]}`);     // 6
// console.log(`Length of Array: ${marks.length}`);                // In some languages length acts as an property or a function. In JS length is property - so we use length not length()

// To print the whole array
// console.log(`${marks}`);

// To access individual element in an array.   OR Traversing Array
// for (let i = 0; i < marks.length; i++) {
//     console.log(`Element at index ${i} is ${marks[i]}`);
// }
// This is one method(using index)


// This is another method where you no use of index: We use "for of"
// for (let element of marks) {
//     console.log(`${element}`);
// }


// Does JS has concept of Negative Index(as python does have):
//Ans: No
// In Array
// console.log(`${marks[-1]}`);     // undefined

// In String
// let str = "abc";
// console.log(`${str[-1]}`);        // undefined


// Generally We can do this:
// let arr = [2, 4, 6, "Accio", true];     // can store any dtype in an array
// But not a good practice



// Array Operations:-
// let arr = [2, 4, 6, 8];

// Insert an Element: 
// 1. Insert at end - (push)
// arr.push(100);
// console.log(`${arr}`);


// 2. Insert at Start -  (unshift)
// arr.unshift(100);
// console.log(`${arr}`);

// Kuch functions return karte hai toh kuch funtions task perform karte hai and kuch functions dono karte hai
// Now, push and unshift are performing operation of adding an element(for e.g adding 100).
// And it is also returning something. but what? --> vo array ki updated length ko return karta hai!!
// But now the question is how to print the return value? --> store array in a variable and then print it.
// let x = arr.push(100);        // performing operation of adding 100
// console.log(`${arr}`);        // and this printing it.
// console.log(`${x}`);          // returning the updated length


// Removing an Element:
// 1. Removing from end - (pop)
// arr.pop();
// console.log(`${arr}`);

// pop performs operation of removing element at end. But what does it returns? --> updated length of array --> NO
// It returns the deleted element.
// let x = arr.pop();           // performing operation of removing 8
// console.log(arr);            // and this printing it.
// console.log(`${x}`);         // returning the deleted element


// 2. Removing from start - (shift)
// arr.shift();
// console.log(arr);

// shift performs operation of removing start element. It returns the deleted element.
// let x = arr.shift();            // performing operation of removing 2
// console.log(arr);               // and this printing it.
// console.log(`${x}`);            // returning the deleted element



// 3. Removing from middle - (splice)
// Syntax of splice --> splice(starting index, no. of elements to be removed, element to insert)
// It can be used for both removing as well as inserting element

// arr.splice(2,1);
// console.log(arr);

// let x = arr.splice(2,1);      // performing operation of removing 6
// console.log(arr);             // and this printing it.
// console.log(`${x}`);          // returning the deleted element


// Inserting in between - (splice)
// arr.splice(2,0,100);
// console.log(arr);

// Here splice doesn't return anything
// let x = arr.splice(2,0,100);
// console.log(arr);
// console.log(`${x}`);            // doesn't return anything

// We can do both deleting element and inserting element at the same time
// arr.splice(2,2,100);
// console.log(arr);           // [ 2, 4, 100 ]

// inserting 100, 200, 300:
// arr.splice(2,2,100, 200, 300); 
// console.log(arr);                   // [ 2, 4, 100, 200, 300 ]
// arr.splice(2,2, [100, 200, 300]);    // array in array
// console.log(arr);                    // [ 2, 4, [ 100, 200, 300 ] ]



// Finding index of an element - indexOf()
// let arr = [2, 4, 6, 8, 10];
// console.log(arr.indexOf(4));       // 1



// Reversing an array - reverse();
// console.log(arr.reverse());



// Sorting array - sort()
// let arr = [3, 1, 5, 7, 6, 9, 4];
// console.log(arr.sort());



// Concatenation - concat()        // returns a new array
// let arr1 = [1, 2 , 3];
// let arr2 = [4, 5 , 6];

// let newarr = arr1.concat(arr2);
// console.log(newarr);




// -----------------------------------------------------------------------------------------
// HIGHER ORDER FUNCTION:
// takes function as an argument (callback function)
//                  OR
// returns a function


// let arr = [2, 4, 6, 8];

// 1. forEach() -
// arr.forEach((elem) => {
//     console.log(elem);
// });

// arr.forEach((elem) => {
//     console.log(elem * 2);
// });

// console.log(arr);

// it does not modify original array
// it returns undefined



// 2. map() -
// let newarr = arr.map((elem) => {
//     return elem * 2;
// });
// console.log(arr);
// console.log(newarr);

// it does not modify original array
// it returns new transformed array



// 3. filter() - 
// let arr  = [5, 8, 2, 3, 11, 7];
// let filteredarr = arr.filter((elem) => {
//     return elem > 5;
// });
// console.log(filteredarr);

// it returns new array
// jis bhi element ke liye condition true ho jayegi vo element push ho jayega filtered or new array me





// Even numbers form an array
let arr = [2, 4, 5, 7, 8, 13];
let n = arr.length;
// let str = "";
// function EvenNumArr(arr, n) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 2 == 0) {
//             str += `${arr[i]} `;
//         }
//     }
//     console.log(str);
// }
// EvenNumArr(arr, n);




// let a = 10;
// var b = 20;

// function random() {
//     console.log("1", a);
//     console.log("2", b);

//     let a = 30;
//     var b = 45;
//     console.log("3", a);
//     console.log("4", b);
// }
// random();