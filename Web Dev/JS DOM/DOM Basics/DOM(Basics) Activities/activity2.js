let op = document.getElementById('output');
let addtext = document.getElementById('add-text');
let addhtml = document.getElementById('add-html');

addtext.addEventListener('click', () => {
    op.textContent = "Plain Text Added";
});

addhtml.addEventListener('click', () => {
    op.innerHTML = "<strong>HTML</strong> Content Added";
});