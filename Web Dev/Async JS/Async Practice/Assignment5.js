// ## 7️⃣ Promise Chaining
// **Goal:** Chain two Promises using `.then()` and log the final result.

function add1(x) {
    return Promise.resolve(x + 1);
}
function double(x) {
    return Promise.resolve(x * 2);
}

add1(5)
.then((x) => {
    double(x)
    .then((x) => 
        {
            console.log(x)
        })
})