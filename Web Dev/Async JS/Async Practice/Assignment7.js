// ## 9️⃣ Fetch (then/catch)
// **Goal:** Fetch data from
// 👉 https://jsonplaceholder.typicode.com/users
// Then print only the user names.

// TODO: fetch -> res.json() -> get names using map()
// TODO: print names or handle error using .catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json();
})
.then((data) => {
    let map = data.map(elem => {
        return elem.name;
    })
    console.log(map);
})
.catch((error) => {
    console.log(error);
})