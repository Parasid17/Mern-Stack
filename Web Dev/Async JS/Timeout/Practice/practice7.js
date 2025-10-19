// ### **Assignment 9 – Stop After 10 Seconds**
// Create a timer that logs `"Tick..."` every second but automatically stops after 10 seconds.
// Use `clearInterval()` when count reaches 10.

let count = 0;
let x = setInterval(() => {
    console.log("Tick...");
    count++;
    if (count == 10) {
        clearInterval(x);
    }
}, 1000);