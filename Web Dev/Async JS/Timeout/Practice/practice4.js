// ### **Assignment 4 – Countdown Timer**
// Write a program that counts down from `5` to `1`, printing one number per second.

let count = 5
function printCount() {
    let x = setTimeout(() => {
        console.log(count);
        count--;
        if (count == 0) {
            console.log("Go!");
            clearTimeout(x);
        }
        else {
            printCount();
        }
    }, 1000);
}
printCount(5);