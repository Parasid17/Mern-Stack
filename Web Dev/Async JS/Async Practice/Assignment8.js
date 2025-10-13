// ## 🔟 Fetch (async/await)
// **Goal:** Fetch the same data using async/await,
// Print the **total count** and the **first user’s email**.

async function getInfo() {
    // TODO: fetch -> await res.json()
    // TODO: print count and first email
    try {
        let data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
        console.log(`Total Count: ${data.length}`);
        console.log("First User's email:", data[0].email);
    }
    catch(error) {
        console.log(error);
    }
}
getInfo();