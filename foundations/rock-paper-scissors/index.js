let choices = ["rock", "paper", "scissors"];
let hScore = 0; // human
let cScore = 0; // computer
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let rand = Math.random();
    if (rand <= .33) {
        return choices[0];
    } else if (rand <= .66) {
        return choices[1];
    } else {
        return choices[2];
    }
}

function checkWinner() {
    if (hScore == 5) {
        const winnerHTML = document.querySelector(".winner");
        winnerHTML.textContent = "human wins!";
        winnerHTML.setAttribute("style", "font-size: 22; font-weight: 800");
        return true;
    } else if (cScore == 5) {
        const winnerHTML = document.querySelector(".winner");
        winnerHTML.textContent = "computer wins!";
        winnerHTML.setAttribute("style", "font-size: 22; font-weight: 800");
        return true;
    }
    return false;
}

function round(choice) {
    if (choice != undefined) {
        cChoice = getComputerChoice();
        hChoice = choice;
        console.log(cChoice, hChoice);

        if (cChoice == "rock") {
            if (hChoice == "rock") {
                round(choice);
            } else if (hChoice == "paper") {
                hScore++;
            } else if (hChoice == "scissors") {
                cScore++;
            }
        } else if (cChoice == "paper") {
            if (hChoice == "rock") {
                cScore++;
            } else if (hChoice == "paper") {
                round(choice);
            } else if (hChoice == "scissors") {
                hScore++;
            }
        } else if (cChoice == "scissors") {
            if (hChoice == "rock") {
                hScore++;
            } else if (hChoice == "paper") {
                cScore++;
            } else if (hChoice == "scissors") {
                round(choice);
            }
        }
    }

    const hScoreHTML = document.querySelector(".hScore");
    hScoreHTML.textContent = `human: ${hScore}`;
    hScoreHTML.setAttribute("style", "font-size: 22; font-weight: 800");
    const cScoreHTML = document.querySelector(".cScore");
    cScoreHTML.textContent = `computer: ${cScore}`;
    cScoreHTML.setAttribute("style", "font-size: 22; font-weight: 800");
    check = checkWinner();
    if (check) {
        buttons.forEach((button) => {
            var newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
        });
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        round(button.id);
    });
});