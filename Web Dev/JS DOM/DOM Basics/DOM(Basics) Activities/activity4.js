let div = document.createElement('div');

let mybox = document.getElementById('mybox');
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let toggle = document.getElementById("toggle");
let check = document.getElementById("check");

add.addEventListener('click', () => {
    mybox.classList.add('highlight');
    div.textContent = "Class `highlight` Added";
    document.body.appendChild(div);
});

remove.addEventListener('click', () => {
    mybox.classList.remove('blue');
    div.textContent = "Class `blue` Removed";
    document.body.appendChild(div);
});

toggle.addEventListener('click', () => {
    mybox.classList.toggle('rounded');
    div.textContent = "Class `rounded` Toggled";
    document.body.appendChild(div);
});

check.addEventListener('click', () => {
    let hasShadow = mybox.classList.contains('shadow');
    div.textContent = `Status ${hasShadow}`;
    document.body.appendChild(div);
});