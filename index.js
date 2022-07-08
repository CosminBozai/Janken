const computerOptions = ["rock", "paper", "scissors"];

let computerSelection =
  computerOptions[Math.floor(Math.random(computerOptions) * 3)];
console.log(computerSelection);

let playerSelection = prompt().toLowerCase();
console.log(playerSelection);

//Play one round
function playRound(playerSelection, computerSelection) {
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

playRound(playerSelection, computerSelection);
