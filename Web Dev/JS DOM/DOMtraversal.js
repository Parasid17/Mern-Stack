let container = document.getElementById('container');

console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.children);

let allChild = container.children;
let secondPara = allChild[2];
console.log(secondPara.nextElementSibling);
console.log(secondPara.previousElementSibling);