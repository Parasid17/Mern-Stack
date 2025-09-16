const list = document.getElementById("list");

// Event delegation: Add listener to the parent <ul>
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked on ${event.target.textContent}`);
    }
});