// CLOSURE :-   24/07/2025

// -> A closure is created when a function "remembers" its lexical scope even when it is executed outside of that scope.
// -> **In short:**
// Closure = Function + Lexical Environment (variables it had access to when it was created)

// function outer() {
//   let counter = 0;

//   return function inner() {
//     counter++;
//     console.log(counter);
//   };
// }

// const count = outer();    // outer is called, inner is returned and assigned to count
// count(); // 1
// count(); // 2
// count(); // 3

// Here, count is a closure. It remembers the variable counter even though outer() has finished executing.