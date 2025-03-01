
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMagicNumber() {
    let low = 1, high = 100;

    console.log("Think of a number between 1 and 100!");

    function askQuestion() {
        if (low > high) {
            console.log("Something went wrong. Please restart.");
            rl.close();
            return;
        }

        let mid = Math.floor((low + high) / 2);
        rl.question(`Is your number:
        1️ Greater than ${mid}? (Type 'high')
        2️ Less than ${mid}? (Type 'low')
        3️ Equal to ${mid}? (Type 'yes')
         Your response: `, (response) => {

            if (response.trim().toLowerCase() === "yes") {
                console.log(`Your Magic Number is: ${mid}!`);
                rl.close();
            } else if (response.trim().toLowerCase() === "low") {
                high = mid - 1;
                askQuestion();
            } else if (response.trim().toLowerCase() === "high") {
                low = mid + 1;
                askQuestion();
            } else {
                console.log("Invalid input! Please enter 'high', 'low', or 'yes'.");
                askQuestion();
            }
        });
    }

    askQuestion();
}

findMagicNumber();
