let t1 = performance.now();

for (let i = 0; i < 100; i++) {
    let p = document.createElement('p');
    p.textContent = `This is paragraph ${i}`;
    document.body.appendChild(p);
}
let t2 = performance.now();
console.log(t2-t1);



// let t3 = performance.now();
// let div = document.createElement('div');
// for (let i = 0; i < 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = `This is paragraph ${i}`;
//     div.appendChild(para);
// }
// document.body.appendChild(div);
// let t4 = performance.now();
// console.log(t4-t3);



// instead of div we will use fragment for optimization and good practice and no css will be affected.
let t3 = performance.now();
// let div = document.createElement('div');  not good
let frag = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    let para = document.createElement('p');
    para.textContent = `This is paragraph ${i}`;
    frag.appendChild(para);
}
document.body.appendChild(frag);
let t4 = performance.now();
console.log(t4-t3);