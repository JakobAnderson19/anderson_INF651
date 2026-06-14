// Ask user for their score
let userScore = Number(prompt("Enter a score between 0 and 100"));
let studentGrade;

// Find correct grade letter
if (userScore < 60) {
    studentGrade = "F";
} else if (userScore <= 69) {
    studentGrade = "D";
} else if (userScore <= 79) {
    studentGrade = "C";
} else if (userScore <= 89) {
    studentGrade = "B";
} else {
    studentGrade = "A";
}

// Display grade letter
alert("Your grade is a(n) " + studentGrade)