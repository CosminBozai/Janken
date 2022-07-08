const computerOptions = ["rock", "paper", "scissors"];

let computerSelection;
let playerSelection;

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
    } else {
      console.log("You win");
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      console.log("You lose");
    } else {
      console.log("You win");
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      console.log("You lose");
    } else {
      console.log("You win");
    }
  }
}

//Function that keeps the game running for a number of rounds
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }
}
game();
