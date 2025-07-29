// LEXICAL SCOPING :-   24/07/2025

// -> also known as Static Scoping.
// -> lexical scope means that the scope of a variable is defined by its position in the source code. 
// -> nested functions have access to variables declared in their outer (parent) functions.

// -> How it works? - The function's scope is determined at the time of writing the code, not when the function is executed.

// function outer() {
//   let name = "Ujjwal";

//   function inner() {
//     console.log(name);    // inner can access name from outer
//   }

//   inner();
// }

// outer();

// Here, inner() can access name because it is defined inside outer(), and JavaScript uses lexical scoping to look up variables.