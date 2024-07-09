let choices = ["rock", "paper", "scissors"]
let hScore = 0; // human
let cScore = 0; // computer

function getComputerChoice() {
    let rand = Math.random();
    if (rand <= .33) {
        return choices[1];
    } else if (rand <= .66) {
        return choices[2];
    } else {
        return choices[3];
    }
}

function getHumanChoice() {
    let choice = prompt("enter: ");
    if (choices.includes(choice)) {
        return choice
    } else {
        return "invalid selection";
    }
}

function round() {
    cChoice = getComputerChoice();
    hChoice = getHumanChoice();

    if (cChoice == "rock") {
        if (hChoice == "rock") {
            round();
        } else if (hChoice == "paper") {
            hScore++;
        } else if (hChoice == "scissors") {
            cScore++;
        }
    } else if (cChoice == "paper") {
        if (hChoice == "rock") {
            cScore++;
        } else if (hChoice == "paper") {
            round();
        } else if (hChoice == "scissors") {
            hScore++;
        }
    } else if (cChoice == "scissors") {
        if (hChoice == "rock") {
            hScore++;
        } else if (hChoice == "paper") {
            cScore++;
        } else if (hChoice == "scissors") {
            round();
        }
    }
}

for (let i = 0; i <= 4; i++) {
    round();
}

if (hScore > cScore) {
    console.log(`human wins!\nhuman: ${hScore} computer: ${cScore}`);
} else if (cScore > hScore) {
    console.log(`computer wins!\nhuman: ${hScore} computer: ${cScore}`);
} else {
    console.log(`tie...\nhuman: ${hScore} computer: ${cScore}`);
}
