// Ask user to generate a password
let password = prompt("Please enter your password");
let passwordConfirm;

// Promp user to reenter password at least once
do {
    passwordConfirm = prompt("Please reenter your password");
} while (password !== passwordConfirm); // Check if passwords match