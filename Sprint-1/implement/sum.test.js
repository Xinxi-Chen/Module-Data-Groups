/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", ()=> {
    const numbers = [];
    const currentOutput = sum(numbers);
    const targetOutput = 0;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns the sum number", ()=> {
    const numbers = [10, 20, 40];
    const currentOutput = sum(numbers);
    const targetOutput = 70;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, returns the correct total sum", ()=> {
    const numbers = [-10, -20, 40];
    const currentOutput = sum(numbers);
    const targetOutput = 10;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", ()=> {
    const numbers = [0.1, 0.2, 0.4];
    const currentOutput = sum(numbers);
    const targetOutput = 0.7;

    expect(currentOutput).toBeCloseTo(targetOutput, 10);
});
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, ignores the non-numerical values and returns the sum of the numerical elements", ()=> {
    const numbers = ["mango", -20, 40, "snow"];
    const currentOutput = sum(numbers);
    const targetOutput = 20;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array containing only non-number values, returns 0", ()=> {
    const numbers = ["mango", "banana", "snow"];
    const currentOutput = sum(numbers);
    const targetOutput = 0;

    expect(currentOutput).toEqual(targetOutput);
});