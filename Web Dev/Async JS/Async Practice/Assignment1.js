// ## 3️⃣ Using forEach
// **Goal:** Print each element and find the total sum using `forEach`.
// TODO: Use forEach to print value + index
// TODO: Find and print total sum
const arr = [2, 4, 6, 8];
let sum = 0;

arr.forEach((elem, idx) => {
    process.stdout.write(`value: ${elem}, index: ${idx}`);
    console.log();
    sum += elem;
});
console.log(sum);