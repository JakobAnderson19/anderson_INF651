// Ask user for a number
let userNum = Number(prompt("Enter a number"));

// Initialize output
let output = "";

// Complete calculation and generate output
for (let i = 1; i <= 10; i++) {
    output += userNum + " x " + i + " = " + (userNum * i) + "<br>";
}

// Display output in HTML
document.getElementById("output").innerHTML = output;