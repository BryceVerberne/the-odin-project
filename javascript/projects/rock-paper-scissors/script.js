let computerSelection;
let playerSelection;

// Randomly return either 'rock', 'paper', or 'scissors' for computer's choice. 
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // Random number between 0, 1, or 2

    if (randomNum === 1) {
        computerSelection = "rock";
    }
    else if (randomNum === 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
}

// Prompt player for choice of either 'rock', 'paper', or 'scissors'
function getPlayerChoice() {
    playerSelection = prompt("Choose your weapon!").toLowerCase();
}

getComputerChoice();
getPlayerChoice();