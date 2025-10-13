// ## 6️⃣ Create a Promise (Resolve / Reject)
// **Goal:** Create a function `getUser(id)` that returns a Promise.
// If `id >= 1` → resolve `{id, name}`
// Else → reject with an error.

function getUser(id) {
    // TODO: Return a Promise with setTimeout(700ms)
    return new Promise((resolve, reject) => {
        if (id >= 1) {
            resolve(id);
        }
        else {
            reject(new Error("Error found"));
        }
    })
}

getUser(1)
    .then(u => console.log("OK:", u))
    .catch(e => console.log("ERR:", e.message));

getUser(0)
    .then(u => console.log("OK:", u))
    .catch(e => console.log("ERR:", e.message));