let btn  = document.getElementById('btn');

// btn.onclick = function() {
//     alert("Button Clicked");
// }


// using Event Listner
// btn.addEventListener('click', () => {
//     alert('Button CLicked');
// });


btn.addEventListener('click', (e) => {
    console.log(e.type);
    console.log(e.target);
});