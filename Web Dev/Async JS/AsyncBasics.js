// ASYNC IN JS :-  06/10/2025
// --------------------------------------------------------------------------
// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("three");
// }, 3000);
// console.log("four");
// 200 lines (sync)

// output
// -------------
// one
// two
// four
// three


// let arr = [2, 4, 6];

// arr.forEach((elem) => {
//     console.log(elem);
// });




// --------------------------------------------------------------------------
// callback -

// function fetchData (url, callback) {
//     setTimeout(() => {
//         let data = {message: "Here is the required data"};
//         callback(data);
//     }, 2000);
// }

// function handleData (data) {
//     console.log(data);
// }
// fetchData("example.com/data", handleData);




// --------------------------------------------------------------------------
// Promise -

// function fetchData (url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let data = {message: "Here is the required data"};     // resolve will run
//             // let data = "";     // reject will run
//             if (data) {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Error fetching the data"));
//             }
//         }, 2000);
//     });
// }

// ******************************************
// // then and catch
// fetchData("example.com/data")
// .then((data) => {
//     console.log(data.message);
// })
// .catch((error) => {
//     console.log(error);
// })

// ******************************************
// async await -
// async function printData() {
//     try {
//         let data = await fetchData("example.com/data");
//         console.log(data.message);
//     }
//     catch(error) {
//         console.log(error);
//     }
// }
// printData();



// --------------------------------------------------------------------------
// fetch -
// fetch("https://jsonplaceholder.typicode.com/users")

// ******************************************
// then and catch for fetch
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// ******************************************
// async await for fetch
// async function fetchData() {
//     try {
//         let data = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//         console.log(await data);
//         // throw new Error("error found");
//     }
//     catch(error) {
//         // console.log("Error while fetching data");
//         console.log(error);
//     }
// }
// fetchData();