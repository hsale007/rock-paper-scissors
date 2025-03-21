let humanScore = 0;
let computerScore = 0;
let gameOver = false;

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

function getRoundWinner(humanChoice, computerChoice) {
  const results = document.querySelector(".round-results");
  if (humanChoice === computerChoice) {
    results.textContent = "Tied! You both played " + humanChoice;
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    humanScore++;
    results.textContent =
      "You Win! " + humanChoice + " beats " + computerChoice;
  } else {
    computerScore++;
    results.textContent =
      "You Lose! " + computerChoice + " beats " + humanChoice;
  }

  if (humanScore === 5 || computerScore === 5) getWinner();
}

function getWinner() {
  const winner = document.querySelector(".winner");
  if (humanScore > computerScore) {
    winner.textContent = "Yay You Win!";
  } else {
    winner.textContent = "Computer Wins!";
  }
  gameOver = true;
  playAgain();
}

function playAgain() {
  const replayButton = document.createElement("button");
  replayButton.textContent = "PLAY AGAIN?";
  document.querySelector(".scores").appendChild(replayButton);

  replayButton.addEventListener("click", () => {
    location.reload();
  });
}

function updateScores() {
  const computerScoreElement = document.querySelector(".computer-score > span");
  const humanScoreElement = document.querySelector(".human-score > span");
  computerScoreElement.textContent = computerScore;
  humanScoreElement.textContent = humanScore;
}

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
  const humanChoiceElement = document.querySelector(".human-choice");
  const computerChoiceElement = document.querySelector(".computer-choice");

  humanChoiceElement.textContent = "You selected " + humanChoice;
  computerChoiceElement.textContent = "Computer selected " + computerChoice;
  getRoundWinner(humanChoice, computerChoice);
  updateScores();
}

const playerChoices = document.querySelectorAll("button");

playerChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!gameOver) playRound(choice.className, getComputerChoice());
  });
});
