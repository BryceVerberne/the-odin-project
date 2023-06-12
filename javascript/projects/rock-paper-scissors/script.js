let computerSelection;
let playerSelection;

// Randomly return either 'rock', 'paper', or 'scissors' for computer's choice. 
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

// Prompt player for choice of either 'rock', 'paper', or 'scissors'
function getPlayerChoice() {
    return prompt("Choose your weapon!").toLowerCase();
}

alert("In a world where the balance of power is determined by the simple game of Rock, Paper, Scissors...");
alert("Two formidable opponents are about to face off in a battle of wits, strategy, and chance...");
alert("One, a mere mortal, armed with intuition and free will. The other, a relentless machine, devoid of emotion and driven by cold, hard logic...");
alert("In this epic showdown, only one can emerge victorious. Will it be the human spirit or the precision of the machine? The first to claim five victories will be declared the champion.");
alert("Prepare yourself, brave player. The fate of the world rests in your hands. Choose wisely... The game of Rock, Paper, Scissors begins NOW!");

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

