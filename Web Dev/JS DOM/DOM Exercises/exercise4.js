let showbtn = document.getElementById('show-btn');
let closebtn = document.getElementById('close-btn');

let div = document.createElement('div');

showbtn.addEventListener('click', () => {
    div.setAttribute('id', 'newsletter');
    div.textContent = "Subscribe to our Newsletter";
    document.body.appendChild(div);
});

closebtn.addEventListener('click', () => {
    document.body.removeChild(div);
});