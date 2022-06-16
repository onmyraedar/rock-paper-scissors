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

    const lowerCasePlayerSelection = playerSelection.toLowerCase()

    if (lowerCasePlayerSelection === "rock") {
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
    } else if (lowerCasePlayerSelection === "paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelection === "Paper") {
            return "Draw! You and the computer both played Paper.";
        } else if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper.";
        } else {
            return "We're sorry. The computer made an erroneous play.";
        }    
    } else if (lowerCasePlayerSelection === "scissors") {
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

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {

        const playerSelection = prompt("Please enter one of the following: Rock, Paper, Scissors.");
        const computerSelection = computerPlay();
        const roundResultsMessage = playRound(playerSelection, computerSelection);
        console.log(roundResultsMessage);

        if (roundResultsMessage.startsWith("You win!")) {
            playerScore++;
        } else if (roundResultsMessage.startsWith("You lose!")) {
            computerScore++;
        } else {
            console.log("Neither you nor the computer will get a point.");
        }

    }

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer's Score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore === computerScore) {
        console.log("It's a draw!");
    } else {
        console.log("Sorry, you lose the game.");
    }

}