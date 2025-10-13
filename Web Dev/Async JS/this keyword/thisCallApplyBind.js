// this -> call, apply and bind :-  13/10/2025
// 1. normal function call

// strict mode
// "use strict";

// function greet() {
//     console.log(this);
// }
// greet();

// non-strict mode
// function greet() {
//     console.log(this);
// }
// greet();


// 2. method inside an object
// let user = {
//     name: "Jay",
//     showName() {
//         console.log(this.name);
//     }
// }

// user.showName();


// 3. constructor
// function Student(name) {
//     this.name = name;
// }

// let s1 = new Student("Aman");
// console.log(s1.name);


// 4. inside event listener
// button.addEventListener('click', function() {
//     console.log(this);     // will point the button
// });


// button.addEventListener('click', () => {
//     console.log(this);     // will point the window
// });


// 5. class method
// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     show() {
//         console.log(this.name);
//     }
// }

// let c = new Car("BMW");
// c.show();


// 6. arrow function
// function normalFunc() {
//     console.log(this);      // window
// }
// const arrowFunc = () => {
//     console.log(this);      // window
// }

// normalFunc();
// arrowFunc();



// let obj = {
//     name: "Rohit",
//     normal: function() {
//         console.log(this);
//     },
//     arrow: () => {
//         console.log(this);
//     }
// }

// obj.normal();
// obj.arrow();






// call, apply and bind

// function greet(place) {
//     console.log((`Hi, I am ${this.name} from ${place}`));
// }

// let person1 = {
//     name: "Rohit"
// }

// let person2 = {
//     name: "Neha"
// }

// 1. call()
// direct call with arguments
// turant chalao
// Syntax: function_name.call(thisValue, arg1, arg2, ....)
// greet.call(person1, "Pune");
// greet.call(person2, "Mumbai");



// 2. apply()
// direct call with arguments as array
// turant chalao
// Syntax: function_name.apply(thisValue, [arg1, arg2, ....])
// greet.apply(person1, ["Delhi"]);
// greet.apply(person2, ["Mumbai"]);



// 3. bind()
// return a new function
// abhi mat chalao
// Syntax: let newFunc =  function_name.bind(thisValue, arg1, arg2, ....)
// let greetp1 = greet.bind(person1, "Pune");
// greetp1();

// let greetp2 = greet.bind(person2, "Mumbai");
// greetp2();



// activity
// const person = {
//     name: "Ravi"
// }

// function intro(city, country) {
//     console.log(`${this.name} from ${city}, ${country}`);
// }

// intro("Delhi", "India");
// intro.call(person, "Delhi", "India");
// intro.apply(person, ["Delhi", "India"]);
// const fn = intro.bind(person, "Delhi", "India");
// fn();

// Output:
// undefined from Delhi, India
// Ravi from Delhi, India
// Ravi from Delhi, India
// Ravi from Delhi, India


