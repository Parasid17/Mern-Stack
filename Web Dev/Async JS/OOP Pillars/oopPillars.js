// OOP FOUR PILLARS :-  13/10/2025

// 1. Encapsulation -
// -> encapsulating data and methods in one unit
// class BandAcc {
//     #balance = 1000;     // private -> use #

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//         }
//         else {
//             console.log("Insufficient Balance");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// const acc = new BandAcc();
// acc.deposit(500);
// console.log(acc.getBalance());





// 2. Inheritance -
// -> data/method transfer(inherits) from parent to child
// extends
// super()

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, course) {
//         super(name);
//         this.course = course;
//     }
//     study() {
//         console.log(`${this.name} is studying ${this.course}`);
//     }
// }

// const s1 = new Student("Riya", "MERN Stack");
// s1.study();
// s1.greet();




// 3. Polymorphism -
// -> one method, many forms
// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog sound!");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat sound!");
//     }
// }

// const animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(a => {
//     a.speak();
// });





// Abstraction -
// -> hide complexity, show only what is needed
// class CoffeeMachine {
//     start() {
//         console.log("Starting the Machine...");
//         this.#heatWater();
//         this.#brewCoffee();
//         console.log("Coffee is ready!");
//     }

//     #heatWater() {
//         console.log("Heating Water..");
//     }

//     #brewCoffee() {
//         console.log("Brewing coffee..");
//     }
// }

// let c = new CoffeeMachine();
// c.start();
// c.#brewCoffee;     // error