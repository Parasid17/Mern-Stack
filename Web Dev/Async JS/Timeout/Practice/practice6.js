// ### **Assignment 6 – Cancel the Plan**
// Create a timeout that shows `"Meeting starts now!"` after 3 seconds.
// But if the user clicks a button `"Cancel Meeting"`, use `clearTimeout()` to stop it.


let btn = document.createElement('button');
btn.textContent = "Cancel Meeting";
document.body.appendChild(btn);
let x = setTimeout(() => {
    console.log("Meeting starts now!");
}, 3000);
btn.addEventListener('click', () => {
    clearTimeout(x);
});