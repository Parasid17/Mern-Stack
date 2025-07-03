// RegExp Practice Question:-    03/07/2025

// ==============================================================================================
// P1 Check if String contains "hello":
// let text = "Say hello to everyone";
// let pattern = /hello/;
// console.log(pattern.test(text));      // true


// ==============================================================================================
// P2 Replace all cat with dog:
// let text = "cat is a cat";
// console.log(text.replace(/cat/g, "dog"));    // dog is dog


// ==============================================================================================
// P3 Match any digit in a string:
// let text = "user123";
// console.log(/\d/.test(text));     // true


// ==============================================================================================
// P4 Match a word that starts with "h":
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));     // true


// ==============================================================================================
// P5 Split a string into an array:
// let text = "red, green, blue";
// console.log(text.split(/,/));


// ==============================================================================================
// P6 Case-insensitive match for "hello":
// let text = "HELLO";
// console.log(/hello/i.test(text));    // true


// ==============================================================================================
// P7 Match if string ends with "world":
// let text = "hello world";
// console.log(/world$/.test(text));        // true


// ==============================================================================================
// P8 Find all occurences of letter "a":
// let text = "banana";
// let pattern = /a/g;
// console.log(text.match(pattern));       // ['a]


// ==============================================================================================
// P9 Match any charcter between "c" and "t":
// let text = "cut";
// console.log(/c[aeiou]t/.test(text));      // true


// ==============================================================================================
// P10 Match any single character using dot:
// let text = "cat";
// console.log(/c.t/.test(text));            // true


// ==============================================================================================
// P11 Check if string contains only digits:
// let text = "12345";
// console.log(/^\d$/.test(text));             // true
// console.log(/^\d+$/.exec(text));            // [ '12345', index: 0, input: '12345', groups: undefined ]


// ==============================================================================================
// P12 Check if word has exactly 3 a's:
// let text = "aaa";
// console.log(/a{3}/.exec(text));


// ==============================================================================================
// P13 Use exec() to find multiple "h"characters:
// let text = "hhaha";
// let pattern = /h/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));


// ==============================================================================================
// P14 Match word boundary for "the":
// let text = "the end";
// console.log(/\bthe/.test(text));         // true


// ==============================================================================================
// P15 Match lowercase letter a-z:
// let text = "A1b2";
// console.log(/[a-z]/.test(text));         // ture


// ==============================================================================================
// P16 Basic Email validation:
// let text = "username@domain.com";
// let pattern = /^\w+@\w+\.\w+$/;
// console.log(pattern.test(text));


// ==============================================================================================
// P17 Basic Phone Number validation (India-style):
// let text = "+919422448029";
// let pattern = /^\+91\d{10}$/;
// console.log(pattern.test(text));


// ==============================================================================================
// P18 Basic Password validation (at least one digit):
// let  password = "sidleet12";
// let pattern = /\d/;
// console.log(pattern.test(password));