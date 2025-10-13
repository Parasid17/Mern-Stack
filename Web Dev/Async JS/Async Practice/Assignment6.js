// ## 8️⃣ Async/Await Version of the Same
// **Goal:** Rewrite the above chaining using async/await.

function add1(x) {
    return Promise.resolve(x + 1);
}
function double(x) {
    return Promise.resolve(x * 2);
}

async function run() {
    // TODO: Use await add1(5) and await double(result)
    // TODO: Print the final result
    let add = await add1(5);
    let double = await double(5);
}
run();