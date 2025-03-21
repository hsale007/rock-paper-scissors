let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let guess = Math.floor(Math.random() * 3);
  if (guess === 0) {
    return "Rock";
  } else if (guess === 1) {
    return "Paper";
  } else if (guess === 2) {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, Paper or Scissors");
  return userChoice;
}

function getWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Tied! You both played " + humanChoice);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    console.log("You Win! " + humanChoice + " beats " + computerChoice);
  } else {
    computerScore++;
    console.log("You Lose! " + computerChoice + " beats " + humanChoice);
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

  console.log("You selected " + humanChoice);
  console.log("Computer selected " + computerChoice);
  getWinner(humanChoice, computerChoice);
  console.log("Computer Score: " + computerScore);
  console.log("Your Score: " + humanScore);
  console.log();
}

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const playerChoices = document.querySelectorAll("button");

playerChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    console.log(choice.className);
  });
});

/*
function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log("Computer Score: " + computerScore);
  console.log("Your Score: " + humanScore);
  if (humanScore === computerScore) {
    console.log("Tied");
  } else if (humanScore > computerScore) {
    console.log("Yay You Win!");
  } else {
    console.log("Computer Wins!");
  }
}

playGame();

*/
