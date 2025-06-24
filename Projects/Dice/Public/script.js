let images = ["one", "two", "three", "four", "five", "six"];
let image = document.getElementById("image");

function roll() {
    const randomIndex = Math.floor(Math.random() * images.length);
    image.src = `Images/${images[randomIndex]}.png`;
}