// ### **Event Loop Order**
// Predict and verify the output:

console.log("Start");

setTimeout(() => console.log("A"), 1000);
setTimeout(() => console.log("B"), 0);

console.log("End");

// Output:-
// Start
// End
// B
// A