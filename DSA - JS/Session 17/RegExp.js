// REGULAR EXPRESSION (REGEX) :-   03/07/2025 

// ==============================================================================================
// 1. What is RegEx?
// -> a pattern used to match characters in strings.
// It is used for:
// search
// match
// maniplate
// validation



// ==============================================================================================
// 2. How to create?
// a) Literal syntax:
// let pattern = /hello/;

// ----------------------------------------------------------------------------------------------
// b) Constructor:
// let pattern = new RegExp("hello");



// ==============================================================================================
// 3. Common Methods
// test() - it works on pattern
// let text = "hello world";
// let pattern = /hello/;
// console.log(pattern.test(text));       // true

// let text = "learning acciojob course";
// let text = "learning accbjiojob course";
// let pattern = /accio/;
// console.log(pattern.test(text));       // true
// let pattern = /accio/;
// console.log(pattern.test(text));       // false


// ----------------------------------------------------------------------------------------------
// match() & exec() -
// -> match() works on text
// -> exec() works on pattern
// let text = "hello hello";
// let pattern = /hello/g;              // g --> global flag
// console.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));   // will give null 
// console.log(pattern.exec(text));   // will again start from begenning

// exec() one more example -
// let text = "hellohhh";
// let pattern = /h/g;
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text)); 
// console.log(pattern.exec(text));
// console.log(text.match(pattern));


// ----------------------------------------------------------------------------------------------
// replace() - it works on text
// let text = "hello hello world";
// console.log(text.replace(/hello/, "hi"));      // will only replace first hello
// console.log(text.replace(/hello/g, "hi"));      // g will help it to replace all hello


// ----------------------------------------------------------------------------------------------
// search() - it works on text
// let text = "hello world";
// console.log(text.search(/world/));     // will return the index --> 6


// ----------------------------------------------------------------------------------------------
// split() - it works on text
// let text = "apple, orange, grapes";
// console.log(text.split(/,/));



// ==============================================================================================
// Flags:
// g (global flag) - done above


// ----------------------------------------------------------------------------------------------
// i (ignore casing) - it ignores the case of the string (i.e upper or lower case)
// let text = "HELLO";
// console.log((/hello/i.test(text)));    // true --> i will ignore the case (lower and upper)

// let text = "ACCIO";
// console.log((/accio/i.test(text)));


// ----------------------------------------------------------------------------------------------
// m (multiline match) - 
// let text = "hello\nworld";
// console.log(/^world/m.test(text));



// ==============================================================================================
// Anchors:
// ^ - checks if it starts with the given pattern
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));          // true


// ----------------------------------------------------------------------------------------------
// $ - checks if it ends with the given pattern
// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));          // true


// ----------------------------------------------------------------------------------------------
// \b (word boundary) - start, end and space should be there
// let text = "hello there";
// let pattern = /\bhello\b/;
// console.log(pattern.test(text));          // true


// ----------------------------------------------------------------------------------------------
// \B (non-word boundary) - opposite of word boundary
// let text = "hello there";
// let pattern = /\Bo/;
// console.log(pattern.test(text));          // true



// ==============================================================================================
// Quantifiers:
// * - matches 0 or more items
// let text = "aaab";
// let pattern  = /a*/;
// console.log(pattern.exec(text));

// let text = "b";
// let pattern  = /a*/;
// console.log(pattern.exec(text));


// ----------------------------------------------------------------------------------------------
// + - matches 1 or more items
// let text = "aaab";
// let pattern  = /a+/;
// console.log(pattern.exec(text));

// let text = "b";          // 0 occurance pe nahi dega
// let pattern  = /a+/;
// console.log(pattern.exec(text));


// ----------------------------------------------------------------------------------------------
// ? - matches 0 or 1 items
// let text = "aab";
// let pattern  = /a?/;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// let text = "aab";
// let pattern  = /a?/g;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));


// ----------------------------------------------------------------------------------------------
// {n} - matches exactly n times
// let text = "aaab";
// let pattern = /a{2}/;
// console.log(pattern.exec(text));     // aa
// console.log(pattern.exec(text));     // a only once, will give null

// let text = "aaaab";
// let pattern = /a{2}/g;
// console.log(pattern.exec(text));     // aa --> index : 0
// console.log(pattern.exec(text));     // aa --> index : 2


// ----------------------------------------------------------------------------------------------
// {n, } - matches n or more times
// let text = "aaab";
// let pattern = /a{2,}/;
// console.log(pattern.exec(text));


// ----------------------------------------------------------------------------------------------
// {n, m} - matches between n and m times
// let text = "aaab";
// let pattern = /a{2,4}/;
// console.log(pattern.exec(text));



// ==============================================================================================
// Sets:
// Character set [abc] -
// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));      // true --> a exists in between c and t


// ----------------------------------------------------------------------------------------------
// Negative Character set [^abc] - here ^ represents negative character
// let text = "cbt";
// let pattern = /c[^aeiou]t/;
// console.log(pattern.test(text));        // true --> a/e/i/o/u does not exists in between c and t



// ==============================================================================================
// Ranges:
// [a-z] -
// let text = "g";
// console.log((/[a-z]/.test(text)));        // true --> g falls under a to z


// ----------------------------------------------------------------------------------------------
// [0-9] -
// let a = 5;
// // let a = "5";
// console.log(/[0-9]/.test(a));            // true --> 5 falls under 0 to 9



// ==============================================================================================
// Predefined character classes:
// \d - any digit
// let text = "123abc";
// console.log(/\d/.test(text));               // true
// console.log(/\d/.exec(text));            // will only give 1
// console.log(/\d+/.exec(text));           // will give 123


// ----------------------------------------------------------------------------------------------
// \w - any word character (letter, digit, underscore)
// let text = "123_abc";
// console.log(/\w/.test(text));
// console.log(/\w/.exec(text));
// console.log(/\w+/.exec(text));


// ----------------------------------------------------------------------------------------------
// \s : any whitespace character
// let text = "a b";
// console.log(/\s/.test(text));    // will give true as there is space

// let text = "ab";
// console.log(/\s/.test(text));       // will give false as there is no space


// ----------------------------------------------------------------------------------------------
// dot character - matches only one character except newline(\n)
// let text = "cat";
// console.log(/c.t/.test(text));        // true

// let text = "cabt";
// console.log(/c.t/.test(text));        // false

// let text = "c\nt";
// console.log(/c.t/.test(text));           // false