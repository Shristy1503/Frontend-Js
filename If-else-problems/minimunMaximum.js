// Generate 5 random three-digit numbers
let numbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 900) + 100);

console.log("Generated Numbers:", numbers);

// Find the minimum and maximum values
let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
