let searchBar = document.getElementById('searchBar');
let itemList = document.getElementById('itemList');
let items = itemList.querySelectorAll('li');

// input event
searchBar.addEventListener('input', () => {
    let query = searchBar.value.toLowerCase();
    items.forEach((item) => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = "";
        }
        else {
            item.style.display = 'none';
        }
    });
});