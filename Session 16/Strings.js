// Strings:-   30/06/2025

// let str = "accio";

// ==============================================================================================
// Accessing character:
// console.log(str[0]);
// console.log(str.charAt(0));

// ==============================================================================================
// Length:
// console.log(str.length);

// ==============================================================================================
// Accessing individually:
// Using for loop -
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// Using for of -
// for (let elem of str) {
//     console.log(elem);
// }


// ==============================================================================================
// Index accessing:
// console.log(str.indexOf("c"));
// console.log(str.lastIndexOf("c"));


// ==============================================================================================
// Upper and Lower Case:
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// ==============================================================================================
// Other In-built functions:
// concat():
// console.log(str.concat(" job"));

// ----------------------------------------------------------------------------------------------
// trim():
// let str1 = "   accio   ";
// console.log(str.trim());

// ----------------------------------------------------------------------------------------------
// startswith():
// console.log(str.startsWith("a"));



// ----------------------------------------------------------------------------------------------
// endswith():
// console.log(str.endsWith("c"));

// function endsWith(str, substr){
//     for(let i=substr.length-1 , j = str.length-1; i>=0 && j>=0; i--,j--){
//         if(str.charAt(j)!==substr.charAt(i)){
//             return false
//         }
//     }
//     return true
// }
// console.log(endsWith("hello world its party time", "time"));

// ----------------------------------------------------------------------------------------------
// includes():
// console.log(str.includes("ac"));

// ----------------------------------------------------------------------------------------------
// split():
// let str = "Hello world";
// console.log(str.split(" "));

// function Splitstr (path, splt) {
//     let str = [];
//     for (let i = 0; i < path.length; i++) {
//         if (path.charAt(i) !== splt) {
//             str.push(path.charAt(i));
//         }
//         else if (path.charAt(i) == path.charAt(i+1)) {
//             str.push('');
//         }
//     }
//     return str;
// }
// console.log(Splitstr("a.b..c.d...e", "."));
// console.log(split1("a.b,,c", ","));

// ----------------------------------------------------------------------------------------------
// slice():
// console.log(str.slice(0,3));        // 3 included nahi hai

// ----------------------------------------------------------------------------------------------
// replace() and replaceAll():
// console.log(str.replace("c","k"));     // akcio (dono c replace nahi hue)
// console.log((str.replaceAll("c", "k")));   // akkio