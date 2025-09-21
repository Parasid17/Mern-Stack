let ques = document.querySelectorAll('.question');
let ans = document.querySelectorAll('.answer');

ques.forEach((que) => {
    que.addEventListener('click', (e) => {
        let answer = e.target.nextElementSibling;
        // if (answer.style.display === "block") {
        //     answer.style.display = "none";
        // }
        // else {
        //     answer.style.display = "block";
        // }
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});