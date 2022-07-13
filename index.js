const computerOptions = ["rock", "paper", "scissors"];

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
rock.addEventListener("click", function () {
  playRound("rock");
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function () {
  playRound("paper");
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function () {
  playRound("scissors");
});

//Play one round
function playRound(playerSelection) {
  computerSelection =
    computerOptions[Math.floor(Math.random(computerOptions) * 3)];
  console.log(playerSelection);
  console.log(computerSelection);
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
