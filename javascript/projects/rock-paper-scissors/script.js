// Randomly return either 'Rock', 'Paper', or 'Scissors' for computer's choice. 
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // Random number between 0, 1, or 2

    if (randomNum === 1) {
        return "rock";
    }
    else if (randomNum === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}