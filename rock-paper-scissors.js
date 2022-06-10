function computerPlay() {

    // Choose a random number that is either 1, 2, or 3

    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // Return the choice that corresponds to the random number

    if (randomNumber === 1) {
        return "Rock";
    } else if (randomNumber === 2) {
        return "Paper";
    } else if (randomNumber === 3) {
        return "Scissors";
    }

}

/* Testing computerPlay in the console

for (let i=0; i<15; i++) {
    console.log(computerPlay());
}

*/

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
        return "Please enter one of the following: Rock, Paper, Scissors.";
    }

}

/* Testing playRound in the console

for (let i=0; i<10; i++) {
    // Simulate a round of Rock Paper Scissors
    const playerSelection = computerPlay();
    const computerSelection = computerPlay(); 
    console.log(`You played ${playerSelection}.`);
    console.log(`The computer played ${computerSelection}.`);
    console.log(playRound(playerSelection, computerSelection));
}

*/