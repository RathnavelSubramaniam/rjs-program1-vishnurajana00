/**
 * Checks if a number is a prime number.
 * @param {number} num - The number to check.
 * @returns {boolean} True if prime, false otherwise.
 */
const isPrime = (num) => {
    // TODO: 1. Handle edge cases (numbers <= 1) using const rules where applicable
    if (num <= 1) {
        return false;
    }
    // TODO: 2. Handle the number 2 and even numbers
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    // TODO: 3. Use a loop to check for factors up to the square root of num
    // Hint: Use 'const' for values that stay the same and 'let' for values that change
    const boundary = Math.sqrt(num);
    
    for (let i = 3; i <= boundary; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true; 
};
    return false; // Change this return statement
};
module.exports = isPrime;
// Export the function for the test cases
module.exports = isPrime;
