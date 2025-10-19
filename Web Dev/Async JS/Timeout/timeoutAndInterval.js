// 13/10/2025

// setTimeout -
// console.log("start");
// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 2000);
// console.log("end");



// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 1000);
// setTimeout(() => {
//     console.log("C");
// }, 500);
// console.log("D");

// Output:
// A
// D
// C
// B




// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// console.log("3");

// Output:
// 1
// 3
// 2





// clearTimeout() -
// let x = setTimeout(() => {
//     console.log("will not run");
// }, 2000);

// clearTimeout(x);




// setInterval() -

// let count = 0;
// setInterval(() => {
//     count++;
//     console.log(`Count: ${count}`);
// }, 1000);





// setInterval(() => {
//     const date = new Date();
//     console.log(`Time: ${date.toLocaleTimeString()}`);
// }, 1000);




// On browser UI -
// let div = document.createElement('div');

// setInterval(() => {
//     const date = new Date();
//     let time = date.toLocaleTimeString('en-US', {hour12: true});
//     div.textContent = time;
// }, 1000);
// document.body.append(div);





// clearInterval() -
// let count = 0;
// let x = setInterval(() => {
//     count++;
//     console.log(`Count: ${count}`);
//     if (count == 5) {
//         clearInterval(x);
//     }
// }, 1000);





// On browser UI -

// let count = 0;
// let x = setInterval(() => {
//     let div = document.createElement('div');
//     count++;
//     div.textContent = count;
//     document.body.append(div);
//     if (count == 5) {
//         clearInterval(x);
//     }
// }, 1000);





// Print count using setTimeout() -
// let count = 0;
// function printCount() {
//     count++;
//     console.log(`Count: ${count}`);
//     setTimeout(printCount, 1000);         // recursive timeout
// }
// printCount();