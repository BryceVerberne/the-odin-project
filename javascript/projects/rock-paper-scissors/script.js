let options = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let computerPoints = 0;
let playerPoints = 0;
let round = 1;

// Add section that determines if the player has won, lost, or tied.
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

// Randomly return either 'rock', 'paper', or 'scissors' for computer's choice. 
let getComputerChoice = () => options[Math.floor(Math.random() * 3)]; // Random number between 0, 1, or 2

// Prompt player for choice of either 'rock', 'paper', or 'scissors'.
let getPlayerChoice = () => prompt("Choose your weapon!").toLowerCase();

/*
// Dramatic introduction
alert("In a world where the balance of power is determined by the simple game of Rock, Paper, Scissors...");

alert("Two formidable opponents are about to face off in a battle of wits, strategy, and chance...");

alert("One, a mere mortal, armed with intuition and free will. The other, a relentless machine, devoid of " + 
      "emotion and driven by cold, hard logic...");
      
alert("In this epic showdown, only one can emerge victorious. Will it be the human spirit or the precision " + 
      "of the machine? The first to claim five victories will be declared the champion.");

alert("Prepare yourself, brave player. The fate of the world rests in your hands. Choose wisely... The game " + 
      "of Rock, Paper, Scissors begins NOW!");
*/

while((playerPoints < 5) && (computerPoints < 5)) {
    alert(`ROUND ${round}`);

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();

    game(playerSelection, computerSelection);

    ++round;
}

if (playerPoints === 5) {
    alert("Victory! You've proven yourself as the ultimate champion, outsmarting the machine in a thrilling " +
          "contest of Rock, Paper, Scissors. The world cheers for its hero!");
}
else {
    alert("Defeat... The machine has claimed victory this time. But remember, true champions are not defined " + 
    "by their victories, but by how they can recover when they fall. The world awaits your triumphant return!");
}