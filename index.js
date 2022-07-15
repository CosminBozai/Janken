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
  if (playerSelection == computerSelection) {
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }
  if (computerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    document.getElementById("winner").textContent = "You lose!";
  }
  if (playerScore === 5) {
    computerScore = 0;
    playerScore = 0;
    document.getElementById("winner").textContent = "You win!";
  }
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}
