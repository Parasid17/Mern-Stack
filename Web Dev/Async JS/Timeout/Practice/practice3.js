// ### **Assignment 3 – Async Fix**
// Convert the previous `longTask()` example into a **non-blocking** version using `setTimeout`.
// Make the “Done” message appear immediately, and “Long task finished” appear later.

function longTask() {
    setTimeout(() => {
        console.log("Processing");
        longTask();
    }, 1000);
}
longTask();
console.log("Done");