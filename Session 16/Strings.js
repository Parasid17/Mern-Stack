// Strings:-   24/06/2025

// Ways to define string:
// let name = "Ram";
// let sentence = `Hi, ${name}`;

// console.log(sentence);
// console.log(typeof name);    // string

// // To get the length
// console.log(name.length);
// let stnc = "helloworld";
// console.log(stnc.length);       // 10
// let stnc2 = "hello world   ";
// console.log(stnc2.length);      // 14 -> also counts the spaces


// // Indexes
// console.log(name.charAt(1));
// console.log(name.lastIndexOf('m'));


// let str = new String("Hello World");
// console.log(typeof str);     // object



// Substring:
// let str1 = "hasjvdmanwhatiswrongwithyou";
// console.log(str1.includes("man"));
// console.log(str1.endsWith("with"));

// function endswithstr(str1,str){
//     let len1 = str.length;
//     let len2 =  str1.length;
//     let start = len2-len1;
//     let str2 = "";

//     for(let i = start ; i <len2 ; i++){
//         str2 = str2+str1.charAt(i);
//     }
//     if(str2 == str){
//         return true;
//     }
// }
// let a = "hello world its party time";
// let b = "time";
// console.log(endswithstr(a,b));



// function endsWith(str, substr){
//     for(let i=substr.length-1 , j = str.length-1; i>=0 && j>=0; i--,j--){
//         if(str.charAt(j)!==substr.charAt(i)){
//             return false
//         }
//     }
//     return true
// }
// console.log(endsWith("hello world its party time", "time"));


// Split
// let path = "a.b.c..d.s";
// console.log(path.split("."));

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


// let str = "Accio job";
// console.log(str.substring(2,7));


// let sentence = "Hello ji kaise ho saare";
// let words = sentence.split(" ");
// console.log(words);

// console.log(words.);


// console.log(words.join(' '));