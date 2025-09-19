// Method 1:
let message = document.getElementById('message');
message.setAttribute('maxlength', '100');
let count = document.getElementById('count');
let ele = document.createElement('span');
ele.textContent = "Max char limit is 100"
message.addEventListener('keyup', (e) => {
    count.textContent = message.value.length;
    if (message.value.length >= 100) {
        document.body.appendChild(ele);
    }
});