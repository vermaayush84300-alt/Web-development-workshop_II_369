const minimum = 1;
const maximum = 100;
const randomNumber = Math.random() * (maximum - minimum + 1) + minimum;
let attempts = 0;
let guessedNumber;
let running = true;
while (running) {

    guessedNumber = window.prompt('guess a number between 1 and 100');
    console.log(typeof guessedNumber, guessedNumber);
    attempts++;
    if (guessedNumber == randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        running = false;
    } else if (guessedNumber < randomNumber) {
        alert('Too low! Try again.');
    } else if (guessedNumber > randomNumber) {
        alert('Too high! Try again.');
    }

    running = false;
}