const args = process.argv.slice(2);

// convert to integer
const num = parseInt(args[0]);

// check if the number is single digit 
if (isNaN(num) || num < 0 || num > 9) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

// Map numbers to words
const numberWords = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine"
];

// Print the corresponding word
console.log(numberWords[num]);