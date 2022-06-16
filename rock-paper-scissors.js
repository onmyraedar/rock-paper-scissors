function computerPlay() {

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else if (randomNumber === 3) {
        return "Scissors";
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock-btn") {
        if (computerSelection === "Rock") {
            return "Draw! You and the computer both played Rock.";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelection === "Scissors") {
            return "You win! Rock beats Scissors.";
        } else {
            // This should only run if the computer outputs something
            // other than Rock, Paper, or Scissors
            return "We're sorry. The computer made an erroneous play.";
        }
    } else if (playerSelection === "paper-btn") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "Paper") {
            return "Draw! You and the computer both played Paper.";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper.";
        } else {
            return "We're sorry. The computer made an erroneous play.";
        }    
    } else if (playerSelection === "scissors-btn") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelection === "Scissors") {
            return "Draw! You and the computer both played Scissors.";
        } else {
            return "We're sorry. The computer made an erroneous play.";
        }    
    } else {
        return "You did not enter a valid choice.";
    }

}

function updateResultsText(roundResultsMessage) {
    const resultsText = document.querySelector(".results-text");
    resultsText.textContent = roundResultsMessage;
}

function updateScoresText(){
    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `The Computer's Score: ${computerScore}`;
}

let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll(".btn-container > button");

gameButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const playerSelection = button.classList[0];
        const computerSelection = computerPlay();
        const roundResultsMessage = playRound(playerSelection, computerSelection);

        if (roundResultsMessage.startsWith("You win!")) {
            playerScore++;
        } else if (roundResultsMessage.startsWith("You lose!")) {
            computerScore++;
        } else {
            console.log("Neither you nor the computer will get a point.");
        }

        updateResultsText(roundResultsMessage);
        updateScoresText();
    });
});