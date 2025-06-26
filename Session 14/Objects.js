// Objects:-

// Creation of Object:
// 1. Object Literals
// let car = {
//     brand : "TATA",
//     color : "Black"

//     start : function() {
//         console.log("Start Engine");
//     }
// };


// 2. Using Object Contructor
// let obj = new Object();
// obj.name = "Accio";
// obj.subject = "Mern";

// console.log(obj);



// let bankAcc = {
//     accHolder : "Siddhant",
//     balance : 10000,

//     deposit : function (amt) {
//         this.balance += amt;
//         console.log(`Deposited Amount: ${amt} Rs`); 
//     },

//     getbalance : function () {
//         console.log(`Current Balance: ${this.balance} Rs`);
//     }
// };

// bankAcc.deposit(5000);
// bankAcc.getbalance(5000);

// Printing whole object:
// console.log(bankAcc);

// To update 
// bankAcc.gender = "Male";
// console.log(bankAcc);

// To delete 
// delete bankAcc.gender;
// console.log(bankAcc);

// two ways to access properties inside an object
// console.log(bankAcc.accHolder);
// console.log(bankAcc['accHolder']);




// ********************************************** 26 June **********************************************
// Objects:-   26/06/2025
// let person = {
//     name : "Harsh",
//     age : 27,
//     place : "Pune",
//     // 1 : 1000    // will not give error, possible hai but nahi karna chahiye
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person["place"]);

// console.log(person[1]);       // here dot notation will not work

// dot notation (.) -> exact property names
// [] notation -> for literals and variables


// ==============================================================================================
// Updation in Objects:
// person.name = "Raj";
// console.log(person);


// ==============================================================================================
// Adding in Objects:
// person.email = "harsh@gmail.com";
// console.log(person);


// ==============================================================================================
// Functions in Objects:
// let person = {
//     name : "Harsh",
//     age : 27,
//     place : "Pune",
//     // 1 : 1000    // will not give error, possible hai but nahi karna chahiye

//     greet : function() {
//         return "Hello";
//     }
// };
// console.log(person.greet());


// ==============================================================================================
// for in loop:
// for (let key in person) {
//     console.log(person[key]);
// }


// ==============================================================================================
// Built-in object methods:
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));



// ==============================================================================================
// De-Structuring:-
// There are two types:

// 1. Array Destructuring ->
// let arr = [100, 200, 300, 400];
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// let four = arr[3];
// console.log(one, two, three, four);
// But instead of writing these lines for every value, we can just do
// let [one, two, three, four] = arr;
// console.log(one, two, three, four);

// If I don't want three
// let [one, two, , four] = arr;    // have to keep it empty(after two and before four). Comma(,) dene ki jaroorat hai
// console.log(one, two, four);


// let [one, two, three, four, five] = arr;
// console.log(one, two, three, four, five);    // here five will give undefined
// We can do
// let [one, two, three, four, five = 500] = arr;
// console.log(one, two, three, four, five);



// ==============================================================================================
// 2. Object Destructuring 
// ->   jo objects ke andar naam hai vahi variables ka naam hona chahiye
// let person = {
//     name : "Harsh",
//     age : 27,
//     // place : "Pune",
// };

// let name = person.name;
// let age = person.age;
// let place = person.place;
// console.log(name, age, place);

// Instead of this we can do
// let {name, age, place} = person;
// console.log(name, age, place);

// If I don't want age
// let {name, place} = person;    // no need to keep it empty. Comma(,) nahi dena hai
// console.log(name, place);


// let {name, age, place = "Mumbai"} = person;    // default value dal di hai place me. Agar upar person me place wali porperty nahi mili toh ye consider karega
// console.log(name, age, place);

// let {name : myName, age, place = "Mumbai"} = person;    // custom renaming a key to a new name while destructuring
// console.log(myName, age, place);       // jo bhi rename kiya hai usko print karna hai



// ==============================================================================================
// Spread Operator:- (...)
// IN ARRAYS
// let arr1 = [1, 2, 3, 4];

// let arr2 = arr1;          // copy nahi bani bas reference hai
// console.log(arr1);
// console.log(arr2);
// If I try to change
// arr1[0] = 100;
// dono me changeho jayega becoz dono arr1 and arr2 ek hi array ko refer kar rahe hai memory me
// console.log(arr1);
// console.log(arr2);


// So to make a copy we do this
// let arr2 = [...arr1];            // copy banegi
// console.log(arr1);
// console.log(arr2);
// If I try to change
// arr1[0] = 100;
// console.log(arr1);
// console.log(arr2);

// To Merge
// let a = [5, 6, 7];
// let arr2 = [...arr1, ...a];
// console.log(arr2);


// ==============================================================================================
// IN OBJECTS
// let obj = {
//     a : 1,
//     b : 2
// };

// let obj1 = {...obj};       // copy bangayi
// console.log(obj1);

// obj.b = 3;
// console.log(obj);
// console.log(obj1);


// ==============================================================================================
// Merging Objects
// let ob = {
//     b : 3,           // merge karte waqt ye print hoga obj me bhi b : 2 hai toh vo over ride hoga
//     d : 4
// }

// let obj1 = {...obj, ...ob};
// console.log(obj1);


// ----------------------------------------------------------------------------------------------
// REST Operator:- (...)
// IN ARRAYS
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(3, 2));   // 5

// function sum(a, b, c) {
//     return a + b + c;
// }
// console.log(sum(3, 2, 1));   // 6

// But what if parameters badhate gaye
// function sum (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));


// let[first,...rest]=[1,2,3,4];
// console.log(first);   // 1
// console.log(rest);    // [2,3,4]


// ==============================================================================================
// IN OBJECTS
// let user = {name:"alice", age: 25, city:"mumbai"};
// let {name, ...rest} = user;
// console.log(name);   // alice
// console.log(rest);  // {age:25, city:"mumbai"}




// ==============================================================================================
// hasOwnProperty:
// -> gives a boolean value
// let user = {
//     name : "Raj",
//     age : 23,
//     place : "Pune"
// };
// console.log(user.hasOwnProperty("age"));