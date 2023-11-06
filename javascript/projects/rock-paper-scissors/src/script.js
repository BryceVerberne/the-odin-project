// Global Variables
// ---------------------------------------------------------------------------------------------
// Here we initialize our variables. These are used to track the state of the game.

let computerSelection;                         // The choice of the computer in each round (rock, paper, or scissors)
let playerSelection;                           // The choice of the player in each round (rock, paper, or scissors)
let computerPoints = 0;                        // The total score of the computer
let playerPoints = 0;                          // The total score of the player
let round = 1;                                 // Current round of the game
const options = ['rock', 'paper', 'scissors']; // Array containing possible game options


// Functions
// ---------------------------------------------------------------------------------------------
// We define several functions to control the game flow, calculate the results, and interact with the player.

// This function prints a dramatic introduction message to the console.
function dramaticIntroduction() {
    console.log("In a world where the balance of power is determined by the simple game of" + 
                " Rock, Paper, Scissors...");

    console.log("Two formidable opponents are about to face off in a battle of wits, strategy," + 
                " and chance...");

    console.log("One, a mere mortal, armed with intuition and free will. The other, a relentless" +
                " machine, devoid of emotion and driven by cold, hard logic...");
      
    console.log("In this epic showdown, only one can emerge victorious. Will it be the human" + 
                " spirit or the precision of the machine? The first to claim five victories will" + 
                " be declared the champion.");

    console.log("Prepare yourself, brave player. The fate of the world rests in your hands. Choose" +
                " wisely... The game of Rock, Paper, Scissors begins NOW!");
}

// Event listeners are set up here for the rock, paper, scissors buttons
function setUpEventListeners() {
    document.querySelector(".human .rock").addEventListener("click", () => {
        console.log("rock");
        playRound("rock");
    });
    document.querySelector(".human .paper").addEventListener("click", () => {
        console.log("paper");
        playRound("paper");
    });
    document.querySelector(".human .scissors").addEventListener("click", () => {
        console.log("scissors");
        playRound("scissors");
    });
}

// This function represents a single round of the game. 
// It gets the choices from the player and computer and determines the winner.
function playRound(choice) {
    console.log(`ROUND ${round}`);
    ++round;

    playerSelection = choice;
    computerSelection = options[Math.floor(Math.random() * 3)]; // Random number between 0, 1, or 2

    choiceComparison(playerSelection, computerSelection); // Compare the selection of the computer & human

    // If the player or the computer has reached 5 points, declare the winner and ask if the player wants to play again.
    // If the player wants to play again, reset the points.
    if (playerPoints === 5) {
        console.log("Victory! You've proven yourself as the ultimate champion, outsmarting the" + 
                    " machine in a thrilling contest of Rock, Paper, Scissors. The world cheers" +
                    " for its hero!");
    
        round = 1;
        playerPoints = 0;
        computerPoints = 0;
    }
    else if (computerPoints === 5) {
        console.log("Defeat... The machine has claimed victory this time. But remember, true" + 
                    " champions are not defined by their victories, but by how they can recover" +
                    " when they fall. The world awaits your triumphant return!");

        round = 1;
        playerPoints = 0;
        computerPoints = 0;
    }
}

// This function determines if the player has won, lost, or tied in a round.
// It also updates the score accordingly and displays the current score.
function choiceComparison(playerSelection, computerSelection) {
    let win = "Against all odds, you've triumphed over the machine!";
    let loss = "Alas, the machine has bested you this time."
    let tie = "A tie! The tension is palpable as both competitors prove their mettle.";

    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;
            
            case 'paper':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;

            case 'scissors':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;
        }
    }
    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;
            
            case 'paper':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;

            case 'scissors':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;
        }
    }
    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;
            
            case 'paper':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;

            case 'scissors':
                console.log(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;
        }
    }
    else {
        console.log(`${playerSelection}... What is this witchcraft?!`);
    }

    console.log(`Score:\nPlayer: ${playerPoints}  Computer: ${computerPoints}`);
}

// Game Start
// ---------------------------------------------------------------------------------------------
// Start the game when the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    dramaticIntroduction();
    setUpEventListeners();
});