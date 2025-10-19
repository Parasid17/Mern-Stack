// ### **Assignment 1 – Queue Simulation**
// Write a program that simulates a queue of people buying tickets.
// Each customer takes their ticket.

// **Requirements:**
// - Log `"Serving Customer 1"`, `"Serving Customer 2"`, etc.
// - All customers should be served **one after another (synchronously)**.


let count = 1;
for (let i = 0; i < 5; i++) {
    console.log(`Serving Customer ${count}`);
    count++;
}
console.log("All Tickets Sold!");