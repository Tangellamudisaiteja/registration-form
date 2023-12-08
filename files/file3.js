function calculateSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = calculateSum(numbers);
console.log(result); // Should output 15