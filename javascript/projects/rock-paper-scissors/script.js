// Global Variables
// ---------------------------------------------------------------------------------------------
// Here we initialize our variables. These are used to track the state of the game.

let computerSelection;                         // The choice of the computer in each round (rock, paper, or scissors)
let playerSelection;                           // The choice of the player in each round (rock, paper, or scissors)
let computerPoints = 0;                        // The total score of the computer
let playerPoints = 0;                          // The total score of the player
let round = 1;                                 // Current round of the game
let play = 'yes';                              // A variable to check if the game should continue or not
const options = ['rock', 'paper', 'scissors']; // Array containing possible game options


// Functions
// ---------------------------------------------------------------------------------------------
// We define several functions to control the game flow, calculate the results, and interact with the player.

// This function prints a dramatic introduction message to the console.
function dramaticIntroduction() {
    alert("In a world where the balance of power is determined by the simple game of" + 
                " Rock, Paper, Scissors...");

    alert("Two formidable opponents are about to face off in a battle of wits, strategy," + 
                " and chance...");

    alert("One, a mere mortal, armed with intuition and free will. The other, a relentless" +
                " machine, devoid of emotion and driven by cold, hard logic...");
      
    alert("In this epic showdown, only one can emerge victorious. Will it be the human" + 
                " spirit or the precision of the machine? The first to claim five victories will" + 
                " be declared the champion.");

    alert("Prepare yourself, brave player. The fate of the world rests in your hands. Choose" +
                " wisely... The game of Rock, Paper, Scissors begins NOW!");
}

// This function randomly returns the choice of the computer (either 'rock', 'paper', or 'scissors').
let getComputerChoice = () => options[Math.floor(Math.random() * 3)]; // Random number between 0, 1, or 2

// This function prompts the player for their choice (either 'rock', 'paper', or 'scissors').
let getPlayerChoice = () => prompt("Choose your weapon!").toLowerCase();

// This function determines if the player has won, lost, or tied in a round.
// It also updates the score accordingly and displays the current score.
function game(playerSelection, computerSelection) {
    let win = "Against all odds, you've triumphed over the machine!";
    let loss = "Alas, the machine has bested you this time."
    let tie = "A tie! The tension is palpable as both competitors prove their mettle.";

    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;
            
            case 'paper':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;

            case 'scissors':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;
        }
    }
    else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;
            
            case 'paper':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;

            case 'scissors':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;
        }
    }
    else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${loss}`);
                ++computerPoints;
                break;
            
            case 'paper':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${win}`);
                ++playerPoints;
                break;

            case 'scissors':
                alert(`Player: ${playerSelection}   Computer: ${computerSelection}\n${tie}`);
                break;
        }
    }
    else {
        alert(`${playerSelection}... What is this witchcraft?!`);
    }

    alert(`Score:\nPlayer: ${playerPoints}  Computer: ${computerPoints}`);
}

// This function represents a single round of the game. 
// It gets the choices from the player and computer and determines the winner.
function playRound() {
    alert(`ROUND ${round}`);
    ++round;

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);
}

// This function asks the player if they want to play another game after a game has finished.
// It returns the player's answer.
function playAgain() {
    let newGame;

    newGame = prompt("Warrior, your battle was fierce and memorable. Will you return to the arena" + 
                  " for another round of Rock, Paper, Scissors? Type 'Yes' to continue, or" + 
                  "'No' to retire. The choice is yours.").toLowerCase();

    if (newGame === 'yes') {
        alert("Excellent! Your courage is commendable. Prepare yourself, the next round" + 
                    " of Rock, Paper, Scissors begins now!");
    }
    else {
        alert("Your decision is respected, warrior. Rest and rejuvenate. The world of Rock," +
                    " Paper, Scissors will await your return.");
    }

    return newGame;
}


// Game Loop
// ---------------------------------------------------------------------------------------------
// The game loop is where the game actually starts and keeps running until the game finishes.

dramaticIntroduction();

// If the player wants to continue, and no one has reached 5 points, continue the game.
while (play === 'yes') {
    while ((playerPoints < 5) && (computerPoints < 5)) {
        playRound();
    }
    
    // If the player or the computer has reached 5 points, declare the winner and ask if the player wants to play again.
    // If the player wants to play again, reset the points.
    if (playerPoints === 5) {
        alert("Victory! You've proven yourself as the ultimate champion, outsmarting the" + 
                    " machine in a thrilling contest of Rock, Paper, Scissors. The world cheers" +
                    " for its hero!");
    }
    else {
        alert("Defeat... The machine has claimed victory this time. But remember, true" + 
                    " champions are not defined by their victories, but by how they can recover" +
                    " when they fall. The world awaits your triumphant return!");
    }

    round = 1;
    playerPoints = 0;
    computerPoints = 0;

    play = playAgain();
}