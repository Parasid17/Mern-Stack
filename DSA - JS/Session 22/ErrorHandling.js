// ERROR HANDLING :-   24/07/2025

// -> Error handling means catching and fixing unexpected problems in your code — without stopping the entire program.

// ----------------------------------------------------------------------------------------------
// 1. try...catch – Catch and Handle Errors :

// try {
//   let total = price * 5;  // price is not declared
//   console.log("Total:", total);
// } catch (error) {
//   console.log("Something went wrong!");
//   console.log("Error message:", error.message);
// }



// ----------------------------------------------------------------------------------------------
// 2. finally – Code That Always Runs :

// try {
//   let marks = [90, 85, 100];
//   console.log(marks[5].toString());  // undefined.toString() = error
// } catch (error) {
//   console.log("Caught error:", error.message);
// } finally {
//   console.log("This line runs no matter what.");
// }



// ----------------------------------------------------------------------------------------------
// 3. throw – Create Your Own Errors (custom errors) :
// -> We use 'throw' to stop execution if something is clearly wrong, like wrong inputs or unexpected behavior.

// function checkAge(age) {
//   if (age < 0) {
//     throw new Error("Age cannot be negative");
//   }
//   console.log("Valid age:", age);
// }

// try {
//   checkAge(-5);
// } catch (error) {
//   console.log("Caught:", error.message);
// }