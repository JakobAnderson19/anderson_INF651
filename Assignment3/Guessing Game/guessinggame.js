// Generate a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user for their first guess
let guess = Number(prompt("Guess a number between 1 and 10:"));

// Keep asking until the guess is correct
while (guess !== secretNumber) {
    guess = Number(prompt("Incorrect! Try again:"));
}

// Display success message
alert("Congratulations! You guessed the correct number!");