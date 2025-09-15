let herotitle = document.querySelector('#hero-title');
let btn = document.getElementById('update-btn');

btn.addEventListener('click', () => {
    herotitle.textContent = "Welcome to My Portfolio";
});

herotitle.classList.add('highlight');