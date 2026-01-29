const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    // "./assets/cute-cat-d.jpg"
];

// Write your code here
const imgElement = document.getElementById('carousel-img');
const forwardBtn = document.getElementById('forward-btn');
const backwardBtn = document.getElementById('backward-btn');
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

let timer = null;
let currentIndex = 0;

function updateImage() {
    imgElement.src = images[currentIndex];
}

function goForward() {
    currentIndex++;
    if (currentIndex >= images.length) currentIndex = 0;
    updateImage();
}
function goBackward () {
    currentIndex--;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateImage();
}

forwardBtn.addEventListener("click", goForward);
backwardBtn.addEventListener("click", goBackward);

function stopSlideshow () {
    clearInterval(timer);
    time = null;
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
}

autoForwardBtn.addEventListener("click",() => {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    timer = setInterval(goForward, 2000);
});
autoBackBtn.addEventListener("click",() => {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    timer = setInterval(goBackward, 2000);
});

stopBtn.addEventListener("click", stopSlideshow);