// Assignment 10 – Auto Slideshow Simulation

const images = ["img1", "img2", "img3"];
let idx = 0;
let count = 1;
let x = setInterval(() => {
        console.log(`Showing ${images[idx]}`);
        idx++;
        if (idx >= images.length) {
            if (count < 2) {
                count++;
                idx = 0;
            }
            else {
                clearInterval(x);
            }
        }
}, 1000);