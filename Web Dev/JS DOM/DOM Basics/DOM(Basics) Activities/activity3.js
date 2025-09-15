let btn = document.getElementById('actionBtn');
let op = document.getElementById('output');

// single click
btn.addEventListener('click', () => {
    btn.setAttribute('class', 'btncls');
    op.innerText = "Attribute `class` is set to `btncls`";
});

// double click
btn.addEventListener('dblclick', () => {
    btn.removeAttribute('class', 'btncls');
    op.innerText = "Attribute `class` is removed";
});

// right click
btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let btntype = btn.getAttribute('type');
    op.innerText = `Attribute type is "${btntype}"`;
});