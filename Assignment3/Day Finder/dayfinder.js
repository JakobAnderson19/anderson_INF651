// Prompt user for a choice
let choice = Number(prompt("Please enter a number between 1 and 7"));

// Check for invalid initial entry
if (choice < 1 || choice > 7) {
    // Check for further invalid entry
    do {
        choice = Number(prompt("Invalid entry. Please enter a number between 1 and 7"));
    } while (choice < 1 || choice > 7)
// Valid entry
} else {
    switch (choice) {
        case 1:
            alert("Sunday");
            break;
        case 2:
            alert("Monday");
            break;
        case 3:
            alert("Tuesday");
            break;
        case 4:
            alert("wednesday");
            break;
        case 5:
            alert("Thursday");
            break;
        case 6:
            alert("Friday");
            break;
        case 7:
            alert("Saturday");
            break;
    }
}