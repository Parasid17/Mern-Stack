// Patterns:  -  07/06/2025

// pattern 1
// let n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// pattern 2
// Method 1
// let n = 5;
// let stars = "";
// for (let i = 0; i < n; i++) {
//     stars += "*";
//     console.log(stars);
// }

// Method 2
// for (let i = 0; i < n; i++) {
//     for (j = 0; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// patter 3
// let n = 5;
// for (let i = 0; i < n; i++) {
//     for (j = 0; j <= i; j++) {
//         process.stdout.write(`${j + 1}`);
//     }
//     console.log();
// }

// Method 2
// let n = 5;
// for (let i = 0; i < n; i++) {
//     for (j = 0; j <= i; j++) {
//         process.stdout.write((j+1).toString());
//     }
//     console.log();
// }


// pattern 4
// let n = 5;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(`${i+1}`);
//     }
//     console.log();
// }



// pattern 5
// let n = 5;
// for (let i = 0; i < n; i++) {
// for (let j = 0; j < (n-i); j++) {
//     process.stdout.write("*");
// }
//     console.log();
// }



// pattern 6
// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < (n-i); j++) {
//         process.stdout.write(`${j+1}`);
//     }
//     console.log();
// }


// pattern 7
//     *
//    ***
//   *****
//  *******

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let  j = 0; j <= n-i-1; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < (2*i) + 1; k++) {
//         str += "*";
//     }
//     console.log(str);
// }



// pattern 8
//  *******
//   *****
//    ***
//     *

// let n = 4;
// let a = n;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let  j = 0; j <= i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < ((2*a)-1); k++) {
//         str += "*";
//     }
//     a--;
//     console.log(str);
// }



// pattern 9
// let n = 3;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let  j = 0; j <= n-i-1; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < (2*i) + 1; k++) {
//         str += "*";
//     }
//     console.log(str);
// }
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let  j = 0; j <= i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < ((n+1) - (2*i) + 2); k++) {    // idhar galat ho raha hai... condition n = 3 vagere ko nahi chalega
//         str += "*";
//     }
//     console.log(str);
// }

// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < n-i-1; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < (2*i)+1; k++) {
//         str += "*";
//     }
//     console.log(str);
// }
// let a = n;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k < ((2*a)-1); k++) {   // This is for all n values
//         str += "*";
//     }
//     a--;
//     console.log(str);
// }



// pattern 10;
// *
// **
// ***
// ****
// ***
// **
// *
// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j <= (n-2-i); j++) {      // or (j = 0; j < (n-1-i); j++)
//         process.stdout.write("*");
//     }
//     console.log();
// }


// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(`${j+1}`);

//     }
//     console.log();
// }


// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("1");
//     }
//     console.log();
// }




// pattern 
// A
// AB
// ABC
// let n = 3;
// for (let i = 0; i < n; i++) {
//     let ch = "";
//     for (let j = 0; j <= i; j++) {
//         ch += String.fromCharCode(65+j);
//     }
//     console.log(ch);
// }



// pattern 
// ABC
// AB
// A
// let n = 3;
// for (let i = 0; i < n; i++) {
//     let ch = "";
//     for (let j = 0; j <= (n-1-i); j++) {
//         ch += String.fromCharCode(65+j);
//     }
//     console.log(ch);
// }



// pattern 
// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// pattern 
// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= (n-1-i); j++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// pattern
// ****
//  ***
//   **
//    *
// let n = 4;
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//         str += " ";
//     }
//     for (let k = 0; k <= (n-1-i); k++) {
//         str += "*";
//     }
//     console.log(str);
// }


// pattern
//    *
//   **
//  ***
// ****
// let n = 4;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < (n - 1 - i); j++) {
//         process.stdout.write(` `);
//     }
//     for (let k = 0; k <= i; k++) {
//         process.stdout.write(`*`);
//     }
//     console.log();
// }



// pattern
//    *
//   * *
//  * * *
// * * * *
// for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < (n - 1 - i); j++) {
//         str += " ";
//     }
//     for (let k = 0; k <= (i); k++) {
//         str += "* ";
//     }
//     console.log(str);
// }



// pattern 
// A
// BC
// CDE
// DEFG
// let n = 26;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         process.stdout.write(`${String.fromCharCode(65+((i+j) % 26))}`);
//     }
//     console.log();
// }