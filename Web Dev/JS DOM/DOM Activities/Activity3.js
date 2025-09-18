let itemInput = document.getElementById('itemInput');
let addItem = document.getElementById('addItem');
let clearList = document.getElementById('clearList');
let shoppingList = document.getElementById('shoppingList');

addItem.addEventListener('click', () => {
    // add item to the list
    let itemText = itemInput.value.trim();
    if (itemText == "") {
        return;
    }

    // create a new list item
    let li = document.createElement('li');
    li.textContent = itemText;

    // add delete button to the list item
    let deleteBtn = document.createElement('span');
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add('delete_Btn');

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    shoppingList.appendChild(li);


    // clear the input field
    itemInput.value = "";
});

clearList.addEventListener('click', () => {
    shoppingList.innerHTML = "";
});