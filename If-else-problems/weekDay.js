
const args = process.argv.slice(2);

// Convert to integer
const num = parseInt(args[0]);

//check number is valid
if (isNaN(num) || num < 1 || num > 7) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

// check weekday
let day;
if (num === 1) {
    day = "Sunday";
} else if (num === 2) {
    day = "Monday";
} else if (num === 3) {
    day = "Tuesday";
} else if (num === 4) {
    day = "Wednesday";
} else if (num === 5) {
    day = "Thursday";
} else if (num === 6) {
    day = "Friday";
} else {
    day = "Saturday";
}

// Print 
console.log(day);
