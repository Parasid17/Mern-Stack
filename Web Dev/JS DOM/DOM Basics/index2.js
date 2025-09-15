let para = document.createElement('p');
// console.log(para);
// para.textContent = "This is a paragraph using text Content";
para.innerHTML = "This is a <i>paragraph</i> using inner HTML";
document.body.appendChild(para);
document.body.removeChild(para);

let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    alert("Button Clicked");
})