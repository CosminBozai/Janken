const computerOptions = ["rock", "paper", "scissors"];

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//Play one round
function playRound(playerSelection, computerSelection) {
  computerSelection =
    computerOptions[Math.floor(Math.random(computerOptions) * 3)];
  console.log(computerSelection);
  playerSelection = prompt().toLowerCase();
  console.log(playerSelection);
  if (playerSelection === computerSelection) {
    console.log("Tie");
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      console.log("You lose");
      computerScore++;
    } else {
      console.log("You win");
      playerScore++;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log("You lose");
      computerScore++;
    } else {
      console.log("You win");
      playerScore++;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("You lose");
      computerScore++;
    } else {
      console.log("You win");
      playerScore++;
    }
  }
}

//Function that keeps the game running for a number of rounds
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
    console.log(`You: ${playerScore}`, `Computer: ${computerScore}`);
  }
  console.log("The final score is:");
  console.log(`You: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log(
      "You beat the computer! You must think you're pretty smart now."
    );
  } else {
    console.log("You lose! Better luck next time.");
  }
}
game();
