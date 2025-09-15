let para = document.createElement('p');
para.innerHTML = "This is a <i>paragraph</i> using inner HTML";


let btn = document.getElementById("add");

btn.addEventListener('click', () => {
    document.body.appendChild(para);
});

let btn2 = document.getElementById("remove");

btn2.addEventListener('click', () => {
    document.body.removeChild(para);
});



// Method 2
// let container = document.getElementById("container");
// let addbtn = document.getElementById("add");
// let removebtn = document.getElementById("remove");

// let newPara = null;

// addbtn.addEventListener('click', () => {
//     newPara = document.createElement('p');
//     newPara.textContent = "This is a paragraph!";
//     container.appendChild(newPara);
// });

// removebtn.addEventListener('click', () => {
//     if (newPara) {
//         container.removeChild(newPara);
//         newPara = null;
//     }
// });




// Handling Multiple paragraphs:

// let container = document.getElementById("container");
// let addbtn = document.getElementById("add");
// let removebtn = document.getElementById("remove");

// let addedParas = [];
// addbtn.addEventListener('click', () => {
//     let para = document.createElement('p');
//     para.textContent = "This is a paragraph!";
//     container.appendChild(para);
//     addedParas.push(para);
// });

// removebtn.addEventListener('click', () => {
//     let lastPara = addedParas.pop();
//     if (lastPara) {
//         container.removeChild(lastPara);
//     }
// });