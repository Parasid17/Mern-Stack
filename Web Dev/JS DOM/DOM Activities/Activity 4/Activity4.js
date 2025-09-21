let taskInput = document.getElementById('taskInput');
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

addTask.addEventListener('click', () => {
    // add item to the list
    let taskText = taskInput.value.trim();
    if (taskText == "") {
        return;
    }

    // create a new list item
    let li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    taskList.appendChild(li);

    // clear the input field
    taskInput.value = "";
});