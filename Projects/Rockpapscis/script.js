const choices = ["rock", "paper", "scissor"];
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let resultdisplay = document.getElementById("result");

function play(option) {
    const comp = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (option === comp) {
        result = "It's a Tie";
    } else {
        switch (option) {
            case "rock":
                result = (comp === "scissor") ? "You Won" : "You Lost";
                break;
            case "paper":
                result = (comp === "rock") ? "You Won" : "You Lost";
                break;
            case "scissor":
                result = (comp === "paper") ? "You Won" : "You Lost";
                break;
        }
    }

    player.textContent = `Player: ${option}`;
    computer.textContent = `Computer: ${comp}`;
    resultdisplay.textContent = result;
}