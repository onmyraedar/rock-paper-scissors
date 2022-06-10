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