// ### **Assignment 2 – Blocking Example**
// Create a function `longTask()` that runs a large `for` loop (like in your example).
// Then show how it **blocks** another `console.log("Done")` line.
// **Hint:** Compare the order of execution.

function longTask() {
    for (let i = 0; i < 2e9; i++) {
        console.log("Processing");
    }
    console.log("Done");
}
longTask();