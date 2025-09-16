let simpleForm = document.getElementById('simpleForm');
let nameInput = document.getElementById('name');
let colorSelect = document.getElementById('color');
let nameError = document.getElementById('nameError');


// focus event on name input
nameInput.addEventListener('focus', () => {
    nameError.textContent = "";
});


// blur event on name input
nameInput.addEventListener('blur', () => {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is Required!";
    }
});


// input event on name input
nameInput.addEventListener('input', () => {
    console.log("user is typing: ", nameInput.value);
});


// change event on color select
colorSelect.addEventListener('change', () => {
    console.log("Color Selected: ", colorSelect.value);
});


// submit event on form
simpleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // check if the name field is empty
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return;
    }

    console.log("Form Submitted!!");
    console.log(nameInput.value);
    console.log(colorSelect.value);
});