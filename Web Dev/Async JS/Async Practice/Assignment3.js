// ## 5️⃣ Callback Example
// **Goal:** Use a callback to simulate data fetching with `setTimeout`.
// **Starter (TODOs):**


function fetchData(url, callback) {
  // TODO: After 800ms, call callback with { message: "hello world" }
  setTimeout(() => {
    callback({ message: "hello world" });
  }, 800)
}

function handleData(data) {
  // TODO: Print data.message in uppercase
  console.log(data.message.toUpperCase());
}

fetchData("example.com", handleData);