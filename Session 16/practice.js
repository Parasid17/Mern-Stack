// STRINGS PRACTICE QUESTIONS:-

// ************************************************************************************
// P1 : Count vowels in a string:
// ========== Method 1 ==========
// function vowels(str) {
//     let count = 0;
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
//             count++;
//         }
//     }
//     return count;
// }
// let str = "ahsbuhekbahiidcb";
// console.log(vowels(str));

// ========== Method 2 ==========
// function vowels(str) {
//     let count = 0;
//     str = str.toLowerCase();
//     let vowel = ["a", "e", "i", "o", "u"];

//     for (let i = 0; i < str.length; i++) {
//         if (vowel.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }
// let str = "ahsbuhekbahiidcb";
// console.log(vowels(str));



// ************************************************************************************
// P2 Reverse a String:
// Using in-built -
// let str = "My name is Anthony";
// console.log(str.split("").reverse().join(""));

// Using loop - 
// function Revstring(str) {
//     let revstr = "";
//     for (let i = str.length-1; i >= 0; i--) {
//         revstr += str[i];
//     }
//     return revstr;
// }
// let str = "accio";
// console.log(Revstring(str));



// ************************************************************************************
// P3 Check if Palindrome:
// let str = "Moon";
// function palindrome(str) {
//     let revstr = str.split("").reverse().join("").toLowerCase();
//     // console.log(revstr);

//     if (str == revstr) {
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }
// palindrome(str);



// ************************************************************************************
// P4 Replace all spaces with dashes:
// let str = "My name is Raj";
// console.log(str.replaceAll(" ", "-"));



// ************************************************************************************
// P5 Count words in a sentence:
// ========== Method 1 ==========
// let str = "My name is Raj";
// str = str.trim();
// function countWords (str) {
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countWords(str));

// ========== Method 2 ==========
// let str = "My name is Raj";
// console.log(str.split(" ").length);