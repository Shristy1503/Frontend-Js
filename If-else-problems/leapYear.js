const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("not valid year");
    process.exit(1);
}

// Convert to integer
const year = parseInt(args[0]);

if (year < 1000 || year > 9999) {
    console.log("Please enter a valid 4-digit year");
    process.exit(1);
}

// check if leap year
const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Print 
console.log(isLeapYear ? "Year is a Leap Year" : "Year is NOT a Leap Year");
