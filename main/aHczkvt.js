function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumberGame() {
    const targetNumber = getRandomNumber(1, 100);
    let attempts = 0;
    let userGuess;

    while (userGuess !== targetNumber) {
        userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;

        if (userGuess < targetNumber) {
            alert("Too low! Try again.");
        } else if (userGuess > targetNumber) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts.`);
        }
    }
}

guessNumberGame();