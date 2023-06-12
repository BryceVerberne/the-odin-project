let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;
let round = 1;
let play = 'yes';
let options = ['rock', 'paper', 'scissors'];

// Functions
// ---------------------------------------------------------------------------------------------
// Print dramatic introduction
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

// Randomly return either 'rock', 'paper', or 'scissors' for computer's choice. 
let getComputerChoice = () => options[Math.floor(Math.random() * 3)]; // Random number between 0, 1, or 2

// Prompt player for choice of either 'rock', 'paper', or 'scissors'.
let getPlayerChoice = () => prompt("Choose your weapon!").toLowerCase();

// Add section that determines if the player has won, lost, or tied.
function game(playerSelection, computerSelection) {
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

// Display round number, get computer & player choices, & decide the winner.
function playRound() {
    console.log(`ROUND ${round}`);
    ++round;

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);
}

// Determine whether or not the player wishes to go again.
function playAgain() {
    let newGame;

    newGame = prompt("Warrior, your battle was fierce and memorable. Will you return to the arena" + 
                  " for another round of Rock, Paper, Scissors? Type 'Yes' to continue, or" + 
                  "'No' to retire. The choice is yours.").toLowerCase();

    if (newGame === 'yes') {
        console.log("Excellent! Your courage is commendable. Prepare yourself, the next round" + 
                    " of Rock, Paper, Scissors begins now!");
    }
    else {
        console.log("Your decision is respected, warrior. Rest and rejuvenate. The world of Rock," +
                    " Paper, Scissors will await your return.");
    }

    return newGame;
}
// ---------------------------------------------------------------------------------------------

// dramaticIntroduction();

while (play === 'yes') {
    while ((playerPoints < 5) && (computerPoints < 5)) {
        playRound();
    }
    
    if (playerPoints === 5) {
        console.log("Victory! You've proven yourself as the ultimate champion, outsmarting the" + 
                    " machine in a thrilling contest of Rock, Paper, Scissors. The world cheers" +
                    " for its hero!");
    }
    else {
        console.log("Defeat... The machine has claimed victory this time. But remember, true" + 
                    " champions are not defined by their victories, but by how they can recover" +
                    " when they fall. The world awaits your triumphant return!");
    }

    play = playAgain();
}