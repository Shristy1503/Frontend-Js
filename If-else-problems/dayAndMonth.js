// Get command-line arguments (first two are 'node' and script name)
const args = process.argv.slice(2);

// Check if two arguments (day and month) are provided
if (args.length < 2) {
    console.log("Usage: node dateCheck.js <day> <month>");
    process.exit(1);
}

// Parse day and month from command line arguments
const day = parseInt(args[0]);
const month = parseInt(args[1]);

// Check if the date falls between March 20 and June 20
const isValid = (month === 3 && day >= 20) ||  // March 20 - March 31
                (month === 4 && day >= 1 && day <= 30) ||  // April 1 - April 30
                (month === 5 && day >= 1 && day <= 31) ||  // May 1 - May 31
                (month === 6 && day <= 20);  // June 1 - June 20

// Print the result
console.log(isValid);
